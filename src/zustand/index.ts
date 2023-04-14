import { create } from 'zustand'
import { BearState, UserData } from './zustand.interface'

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

  loggedInUser: undefined,

  setLoggedInUser: (loggedInUser: UserData) =>
    set((state) => {
      return {
        ...state,
        loggedInUser,
      }
    }),
}))
