'use client'

import { useState } from 'react'
import axios from 'axios'
import { Search, Github, Users, ExternalLink } from 'lucide-react'

const Hero = ({ onProfileFound }) => {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      onProfileFound(response.data)
      setUsername('')
    } catch (error) {
      setError('User not found. Please check the username and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="p-8 bg-blue-600 rounded-full shadow-xl animate-float">
              <Github className="w-20 h-20 text-white" />
            </div>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
            Find GitHub
            <span className="block text-gradient">Profiles</span>
          </h1>
          
          <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600 md:text-2xl">
            Discover amazing developers, explore their repositories, and connect with the GitHub community in seconds.
          </p>

          {/* Search Form */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 shadow-lg card animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                    <Search className="w-6 h-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="pl-16 text-xl input-field"
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !username.trim()}
                  className="w-full py-5 text-xl font-semibold btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
                      <span>Searching...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <Search className="w-6 h-6" />
                      <span>Find Profile</span>
                    </div>
                  )}
                </button>
              </form>

              {/* Error Message */}
              {error && (
                <div className="p-4 mt-6 border border-red-200 rounded-lg bg-red-50 animate-fade-in">
                  <p className="font-medium text-red-600">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 animate-slide-up">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Everything You Need</h2>
            <p className="text-lg text-gray-600">Get comprehensive insights into any GitHub profile</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center card card-hover">
              <div className="flex items-center justify-center w-20 h-20 p-5 mx-auto mb-6 bg-blue-100 rounded-full">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Complete Profile</h3>
              <p className="text-gray-600">
                View detailed profile information including bio, location, company, and join date
              </p>
            </div>
            
            <div className="p-8 text-center card card-hover">
              <div className="flex items-center justify-center w-20 h-20 p-5 mx-auto mb-6 bg-blue-100 rounded-full">
                <Github className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Repository Explorer</h3>
              <p className="text-gray-600">
                Browse through all public repositories with stars, forks, and language information
              </p>
            </div>
            
            <div className="p-8 text-center card card-hover">
              <div className="flex items-center justify-center w-20 h-20 p-5 mx-auto mb-6 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Quick Access</h3>
              <p className="text-gray-600">
                Direct links to GitHub profiles, personal websites, and social connections
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 animate-slide-up">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Why Choose GitHub Finder?</h2>
            <p className="text-lg text-gray-600">Built for developers, by developers</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="p-6 text-center card">
              <div className="mb-4 text-4xl font-bold text-blue-600">100%</div>
              <div className="font-medium text-gray-600">Free to Use</div>
              <div className="mt-2 text-sm text-gray-500">No hidden costs</div>
            </div>
            <div className="p-6 text-center card">
              <div className="mb-4 text-4xl font-bold text-blue-600">24/7</div>
              <div className="font-medium text-gray-600">Available</div>
              <div className="mt-2 text-sm text-gray-500">Always online</div>
            </div>
            <div className="p-6 text-center card">
              <div className="mb-4 text-4xl font-bold text-blue-600">Fast</div>
              <div className="font-medium text-gray-600">Performance</div>
              <div className="mt-2 text-sm text-gray-500">Lightning quick</div>
            </div>
            <div className="p-6 text-center card">
              <div className="mb-4 text-4xl font-bold text-blue-600">Simple</div>
              <div className="font-medium text-gray-600">User Experience</div>
              <div className="mt-2 text-sm text-gray-500">Easy to use</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="animate-slide-up">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to discover any GitHub profile</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-blue-600 rounded-full">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Enter Username</h3>
              <p className="text-gray-600">Type any GitHub username in the search box above</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-blue-600 rounded-full">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Get Results</h3>
              <p className="text-gray-600">Instantly view profile details and statistics</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-blue-600 rounded-full">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Explore</h3>
              <p className="text-gray-600">Browse repositories and connect with developers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
