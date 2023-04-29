import { signOut } from 'firebase/auth'
import { auth } from '../firebase/init'

const handleLogout = () => {
  // eslint-disable-next-line no-undef
  signOut(auth)
    .then(() => {
      window.location.reload()
    })
    .catch(() => {
      // ALERT
    })
}

export default handleLogout
