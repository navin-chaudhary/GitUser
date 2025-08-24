'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Profile from '../components/Profile'

export default function Home() {
  const [profile, setProfile] = useState(null)
  const [showProfile, setShowProfile] = useState(false)

  const handleProfileFound = (profileData) => {
    setProfile(profileData)
    setShowProfile(true)
  }

  const handleBackToSearch = () => {
    setShowProfile(false)
    setProfile(null)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      {showProfile ? (
        <Profile profile={profile} onBack={handleBackToSearch} />
      ) : (
        <Hero onProfileFound={handleProfileFound} />
      )}
    </div>
  )
}
