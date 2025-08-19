interface User {
  id: number;
  email: string;
  username: string;
  full_name?: string;
  is_active: boolean;
  is_verified: boolean;
  subscription_tier: 'free' | 'basic' | 'premium';
  total_tokens_used: number;
  total_cost_cents: number;
  monthly_tokens_used: number;
  monthly_cost_cents: number;
  created_at: string;
  updated_at?: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

interface RegisterData {
  email: string;
  username: string;
  password: string;
  full_name?: string;
}

interface LoginData {
  email: string;
  password: string;
}

class AuthService {
  private baseURL = 'http://localhost:8000/api/v1/auth';
  private tokenKey = 'peplike_access_token';

  // Store token in localStorage
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get token from localStorage
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove token from localStorage
  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Get headers with authentication
  private getAuthHeaders(): HeadersInit {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  // Register new user
  async register(userData: RegisterData): Promise<User> {
    try {
      const response = await fetch(`${this.baseURL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Registration failed');
      }

      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  // Login user
  async login(loginData: LoginData): Promise<{ user: User; token: string }> {
    try {
      // Convert to form data format that the backend expects
      const formData = new FormData();
      formData.append('username', loginData.email); // Backend expects 'username' field
      formData.append('password', loginData.password);

      const response = await fetch(`${this.baseURL}/login`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const tokenData: LoginResponse = await response.json();
      
      // Store the token
      this.setToken(tokenData.access_token);

      // Get user data
      const user = await this.getCurrentUser();
      
      return { user, token: tokenData.access_token };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Get current user
  async getCurrentUser(): Promise<User> {
    try {
      const response = await fetch(`${this.baseURL}/me`, {
        headers: this.getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to get user data');
      }

      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  }

  // Update user profile
  async updateProfile(updates: Partial<User>): Promise<User> {
    try {
      const response = await fetch(`${this.baseURL}/me`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Update failed');
      }

      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Logout user
  logout(): void {
    this.removeToken();
    localStorage.removeItem('peplike_user');
  }

  // Get stored user data
  getStoredUser(): User | null {
    const userData = localStorage.getItem('peplike_user');
    return userData ? JSON.parse(userData) : null;
  }

  // Store user data
  storeUser(user: User): void {
    localStorage.setItem('peplike_user', JSON.stringify(user));
  }

  // Check if token is valid
  async validateToken(): Promise<boolean> {
    try {
      const token = this.getToken();
      if (!token) return false;

      const response = await fetch(`${this.baseURL}/test-token`, {
        headers: this.getAuthHeaders(),
      });

      return response.ok;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  }

  // Refresh user data
  async refreshUserData(): Promise<User | null> {
    try {
      if (!this.isAuthenticated()) return null;
      
      const user = await this.getCurrentUser();
      this.storeUser(user);
      return user;
    } catch (error) {
      console.error('Refresh user data error:', error);
      this.logout();
      return null;
    }
  }
}

export const authService = new AuthService();
export type { User, RegisterData, LoginData };
