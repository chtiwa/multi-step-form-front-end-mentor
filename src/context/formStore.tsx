import { create } from "zustand"

type formStore = {
  index: number
  isValid: boolean
  isMonthly: boolean
  plan: string
  addOns: string[]
  inc: () => void
  dec: () => void
  setIsValid: (isValid: boolean) => void
  setIsMonthly: (isMonthly: boolean) => void
  setPlan: (plan: string) => void
  setAddOns: (addOn: string) => void
}
// check that it's valid to go to next step
// go to next step and set isValid state to false to check again
export const useFormStore = create<formStore>()((set) => ({
  index: 1,
  isValid: false,
  isMonthly: true,
  plan: "Arcade",
  addOns: [],
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
  setIsValid: (isValid) => set(() => ({ isValid: isValid })),
  setIsMonthly: (isMonthly) => set(() => ({ isMonthly: isMonthly })),
  setPlan: (plan) => set(() => ({ plan: plan })),
  setAddOns: (addOn) => {
    set((state) => ({
      addOns: !state.addOns.includes(addOn)
        ? [...state.addOns, addOn]
        : state.addOns.filter((ao) => ao !== addOn)
    }))
  }
}))
