import { create } from 'zustand'
import { BearState } from './zustand.interface'

export const useZustandStore = create<BearState>((set) => ({
  alert: undefined,

  setAlert: (alert) => {
    setTimeout(() => {
      set(() => ({
        alert: undefined,
      }))
    }, alert?.duration)

    return set(() => {
      return {
        alert,
      }
    })
  },
}))
