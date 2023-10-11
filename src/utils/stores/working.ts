import { create } from 'zustand';

interface Store {
  currentTaskGroupId: string | null;
  setCurrentTaskGroupId: (currentTaskGroupId: string | null) => void;
}

const useWorkingStore = create<Store>((set) => ({
  currentTaskGroupId: null,
  setCurrentTaskGroupId: (currentTaskGroupId) => set({ currentTaskGroupId }),
}));




export default useWorkingStore;
