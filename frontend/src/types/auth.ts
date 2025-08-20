export interface User {
  id: string;
  email: string;
  name?: string;
  is_active?: boolean;
  is_verified?: boolean;
  subscription_tier?: 'free' | 'basic' | 'premium';
  total_tokens_used?: number;
  total_cost_cents?: number;
  monthly_tokens_used?: number;
  monthly_cost_cents?: number;
  stripe_customer_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
