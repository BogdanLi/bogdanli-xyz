import { createStore } from "zustand/vanilla";

export type SidebarState = {
  show: boolean;
};

export type SideBarActions = {
  open: () => void;
  close: () => void;
};

export type SidebarStore = SidebarState & SideBarActions;

export const defaultInitState: SidebarState = {
  show: false,
};

export const createSidebarStore = (
  initState: SidebarState = defaultInitState,
) => {
  return createStore<SidebarStore>()((set) => ({
    ...initState,
    open: () => set((state) => ({ show: true })),
    close: () => set((state) => ({ show: false })),
  }));
};
