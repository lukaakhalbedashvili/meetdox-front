import { create } from 'zustand'
import { BearState } from './zustand.interface'

export const useZustandStore = create<BearState>((set) => ({
  notification: undefined,

  setNotifications: (notification) =>
    set(() => {
      return {
        notification,
      }
    }),
}))
