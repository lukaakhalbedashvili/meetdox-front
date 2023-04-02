import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyDdW73biokdxfPB9EU9jM8aKOd_Oj8hT-M',
  authDomain: 'tippp-5dee3.firebaseapp.com',
  projectId: 'tippp-5dee3',
  storageBucket: 'tippp-5dee3.appspot.com',
  messagingSenderId: '1011580709611',
  appId: '1:1011580709611:web:ac7febd4761ef30ea0acae',
  measurementId: 'G-501H1ZT139',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

// const analytics = getAnalytics(app)
