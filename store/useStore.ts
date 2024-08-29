import { create } from "zustand"

interface StoreState {
  selectedSections: Record<string, string>
  selectSection: (section: string, value: string) => void
}

export const useStore = create<StoreState>((set) => ({
  selectedSections: {},
  selectSection: (section, value) =>
    set((state) => ({
      selectedSections: {
        ...state.selectedSections,
        [section]: value,
      },
    })),
}))
