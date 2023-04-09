import { create } from 'zustand'
import { BearState } from './zustand.interface'

export const useZustandStore = create<BearState>((set) => ({
  alert: undefined,

  setAlert: (alert) =>
    set(() => {
      return {
        alert,
      }
    }),
}))
