import { signOut } from 'firebase/auth'
import { auth } from '../firebase/init'

const handleLogout = () => {
  signOut(auth)
}

export default handleLogout
