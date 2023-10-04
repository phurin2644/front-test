import { type User } from "../types/users";
import { create } from 'zustand';

export type AuthState = 'none' | 'loggedOut' | 'signedIn' | 'loading';

interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
  state: AuthState;
  setState: (state: AuthState) => void;
}

const useAuthStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  state: 'none',
  setState: (state) => set({ state }),
}));

export default useAuthStore;
