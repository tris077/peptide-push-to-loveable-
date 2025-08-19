import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authService, User } from "@/services/authService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, username: string, password: string, fullName?: string) => Promise<void>;
  signOut: () => void;
  updateSubscription: (tier: 'free' | 'basic' | 'premium') => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on app load
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        
        // Check if we have a stored token
        if (authService.isAuthenticated()) {
          // Validate the token
          const isValid = await authService.validateToken();
          if (isValid) {
            // Get fresh user data
            const userData = await authService.getCurrentUser();
            if (userData) {
              setUser(userData);
              authService.storeUser(userData);
            }
          } else {
            // Token is invalid, clear everything
            authService.logout();
            setUser(null);
          }
        } else {
          // Check for stored user data (fallback)
          const storedUser = authService.getStoredUser();
          if (storedUser) {
            setUser(storedUser);
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        authService.logout();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { user: userData } = await authService.login({ email, password });
      setUser(userData);
      authService.storeUser(userData);
    } catch (error) {
      console.error("Sign in failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, username: string, password: string, fullName?: string) => {
    try {
      setIsLoading(true);
      const userData = await authService.register({ email, username, password, full_name: fullName });
      
      // After successful registration, automatically log them in
      const { user: loggedInUser } = await authService.login({ email, password });
      setUser(loggedInUser);
      authService.storeUser(loggedInUser);
    } catch (error) {
      console.error("Sign up failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    authService.logout();
    setUser(null);
  };

  const updateSubscription = (tier: 'free' | 'basic' | 'premium') => {
    if (user) {
      const updatedUser = { ...user, subscription_tier: tier };
      setUser(updatedUser);
      authService.storeUser(updatedUser);
    }
  };

  const refreshUser = async () => {
    try {
      if (authService.isAuthenticated()) {
        const userData = await authService.refreshUserData();
        if (userData) {
          setUser(userData);
        }
      }
    } catch (error) {
      console.error("Failed to refresh user:", error);
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signUp,
    signOut,
    updateSubscription,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
