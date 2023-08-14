import { useZustandStore } from '@/zustand'

const useLandingBanner = () => {
  const setIsSignupPopupOpen = useZustandStore(
    (state) => state.setIsSignupPopupOpen
  )
  return { setIsSignupPopupOpen }
}

export default useLandingBanner
