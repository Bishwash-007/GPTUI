import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name?: string;
  // Add more user properties as needed
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  error: string | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setError: (error: string | null) => void;
  setLoading: (isLoading: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
  login: async (user) => {
    try {
      set({ isLoading: true, error: null });
      // TODO: Implement API call for login
      // const response = await api.login(user);
      set({ isAuthenticated: true, user, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  logout: async () => {
    try {
      set({ isLoading: true, error: null });
      // TODO: Implement API call for logout
      // await api.logout();
      set({ isAuthenticated: false, user: null, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setError: (error) => set({ error }),
  setLoading: (isLoading) => set({ isLoading }),
}));

export const useAuth = () => {
  const {
    isAuthenticated,
    isLoading,
    user,
    error,
    login,
    logout,
    setUser,
    setIsAuthenticated,
    setError,
    setLoading,
  } = useAuthStore();

  return {
    isAuthenticated,
    isLoading,
    user,
    error,
    login,
    logout,
    setUser,
    setIsAuthenticated,
    setError,
    setLoading,
  };
};

export default useAuthStore;
