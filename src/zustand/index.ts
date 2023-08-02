import { create } from 'zustand'
import { BearState } from './zustand.interface'

export const useZustandStore = create<BearState>((set) => ({
  alert: undefined,
  // const [isLogInPopupOpen, setIsLogInPopupOpen] = useState(false)
  isLogInPopupOpen: false,

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
}))
