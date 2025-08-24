'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Globe, 
  Github, 
  Star, 
  GitFork, 
  ExternalLink,
  Building,
  Award,
  Clock,
  Code
} from 'lucide-react'

const Profile = ({ profile, onBack }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        if (profile && profile.repos_url) {
          const response = await axios.get(profile.repos_url)
          setRepos(response.data.slice(0, 12)) // Limit to 12 repos for better performance
        }
      } catch (error) {
        console.error('Error fetching repositories:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [profile])

  if (!profile) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Search</span>
        </button>

        {/* Profile Header */}
        <div className="card p-8 mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
                <Image
                  src={profile.avatar_url}
                  alt={`${profile.login}'s avatar`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {profile.name || profile.login}
                </h1>
                {profile.login !== profile.name && (
                  <p className="text-xl text-blue-600 font-medium mb-4">@{profile.login}</p>
                )}
                {profile.bio && (
                  <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                    {profile.bio}
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{profile.public_repos}</div>
                  <div className="text-gray-600 text-sm font-medium">Repositories</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{profile.followers}</div>
                  <div className="text-gray-600 text-sm font-medium">Followers</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{profile.following}</div>
                  <div className="text-gray-600 text-sm font-medium">Following</div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-3 mb-6">
                {profile.company && (
                  <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                    <Building className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{profile.company}</span>
                  </div>
                )}
                {profile.location && (
                  <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{profile.location}</span>
                  </div>
                )}
                {profile.blog && (
                  <a
                    href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{profile.blog}</span>
                  </a>
                )}
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Joined {new Date(profile.created_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Github className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
                {profile.blog && (
                  <a
                    href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Visit Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Repositories */}
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Public Repositories
            </h2>
            <p className="text-gray-600">Explore the latest projects and contributions</p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading repositories...</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <div 
                  key={repo.id} 
                  className="card p-6 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Code className="h-5 w-5 text-blue-500" />
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {repo.name}
                        </h3>
                      </div>
                      {repo.description && (
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {repo.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Created {new Date(repo.created_at).toLocaleDateString()}</span>
                    </div>
                    {repo.language && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">{repo.forks_count}</span>
                      </div>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && repos.length === 0 && (
            <div className="text-center py-12">
              <div className="card p-8 max-w-md mx-auto">
                <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Public Repositories</h3>
                <p className="text-gray-600">This user hasn&apos;t made any public repositories yet.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
