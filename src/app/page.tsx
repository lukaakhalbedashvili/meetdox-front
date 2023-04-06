'use client'

import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase/init'

const Home = () => {
  const [user, setUser] = useState<string>()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.email && setUser(user.email)
      } else {
        setUser('No user')
      }
    })
  }, [])

  return <main className="bg-white h-[500px] font-ubuntu">{user} </main>
}

export default Home
