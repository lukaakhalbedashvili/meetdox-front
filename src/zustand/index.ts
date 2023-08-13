import { create } from 'zustand'
import { UserFromUserData } from '@/reactQuery/getUserData/getUserData.interface'
import { BearState } from './zustand.interface'

export const useZustandStore = create<BearState>((set) => ({
  alert: undefined,
  isLogInPopupOpen: false,

  loggedInUser: undefined,

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

  setIsLogInPopupOpen: (isPopupOpen: boolean) =>
    set((state) => {
      return { ...state, isLogInPopupOpen: isPopupOpen }
    }),

  setLoggedInUser: (user?: UserFromUserData) =>
    set((state) => {
      return { ...state, loggedInUser: user }
    }),
}))
