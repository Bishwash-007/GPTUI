import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  user: any;
  login: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));
export const useAuth = () => {
  const { isAuthenticated, user, login, logout, setUser, setIsAuthenticated } =
    useAuthStore();
  return {
    isAuthenticated,
    user,
    login,
    logout,
    setUser,
    setIsAuthenticated,
  };
};
export default useAuthStore;
