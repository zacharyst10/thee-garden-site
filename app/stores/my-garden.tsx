import { create } from "zustand";

interface GardenState {
  titles: string[]; // Only keeping track of titles
  addToGarden: (title: string) => void;
}

export const useStore = create<GardenState>((set) => ({
  titles: [],
  addToGarden: (title) =>
    set((state) => ({ titles: [...state.titles, title] })),
}));
