import { useMutation } from '@tanstack/react-query'
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/utils/firebase/init'
import { passwordChange } from '@/utils/api/passwordChange'
import { useZustandStore } from '@/zustand'
import { AlertType } from '@/zustand/zustand.interface'

export const usePasswordChange = () => {
  const { setAlert } = useZustandStore()

  return useMutation({
    mutationFn: async (payload: {
      oldPassword: string
      newPassword: string
    }) => {
      // check if password is correct
      const user = auth.currentUser
      if (user?.email) {
        const credential = EmailAuthProvider.credential(
          user.email,
          payload.oldPassword
        )
        await reauthenticateWithCredential(user, credential)
          .then(async () => {
            passwordChange({
              newPassword: payload.newPassword,
            }).then((val) => {
              if (val === 'success') {
                setAlert({
                  message: 'success',
                  type: AlertType.SUCCESS,
                  onClick: () => {},
                  duration: 2000,
                })
                user.email &&
                  signInWithEmailAndPassword(
                    auth,
                    user.email,
                    payload.newPassword
                  )
              }
            })
          })
          .catch(() => {
            setAlert({
              message: 'wrong password',
              type: AlertType.ERROR,
              onClick: () => {},
              duration: 2000,
            })
          })
      }
    },
  })
}
