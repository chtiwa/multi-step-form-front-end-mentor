import { create } from "zustand"

type formStore = {
  index: number
  isValid: boolean
  inc: () => void
  dec: () => void
  setIsValid: (isValid: boolean) => void
}
// check that it's valid to go to next step
// go to next step and set isValid state to false to check again
export const useFormStore = create<formStore>()((set) => ({
  index: 1,
  isValid: false,
  inc: () =>
    set((state) => ({
      index: state.index < 4 ? state.index + 1 : state.index,
      isValid: false
    })),
  dec: () =>
    set((state) => ({
      index: state.index > 1 ? state.index - 1 : state.index,
      isValid: false
    })),
  setIsValid: (isValid) => set(() => ({ isValid: isValid }))
}))
