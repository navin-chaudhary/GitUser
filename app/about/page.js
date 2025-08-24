'use client'

import Link from 'next/link'
import { ArrowLeft, Github, Heart, Users, Code, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About GitHub Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, fast, and beautiful way to discover and explore GitHub profiles.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="card p-6 text-center card-hover">
            <Github className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">GitHub Integration</h3>
            <p className="text-gray-600 text-sm">
              Seamlessly connects with GitHub&apos;s API to fetch real-time profile data and repository information.
            </p>
          </div>

          <div className="card p-6 text-center card-hover">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Profile Discovery</h3>
            <p className="text-gray-600 text-sm">
              Find and explore GitHub profiles with detailed information including stats, bio, and social links.
            </p>
          </div>

          <div className="card p-6 text-center card-hover">
            <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Repository Explorer</h3>
            <p className="text-gray-600 text-sm">
              Browse through public repositories with detailed information about stars, forks, and languages.
            </p>
          </div>

          <div className="card p-6 text-center card-hover">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsive Design</h3>
            <p className="text-gray-600 text-sm">
              Fully responsive design that works perfectly on desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="card p-6 text-center card-hover">
            <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple UX</h3>
            <p className="text-gray-600 text-sm">
              Clean and intuitive user experience with fast loading times and smooth interactions.
            </p>
          </div>

          <div className="card p-6 text-center card-hover">
            <div className="h-12 w-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast & Efficient</h3>
            <p className="text-gray-600 text-sm">
              Built with Next.js for optimal performance and fast loading times.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Built With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-2">Next.js</div>
              <div className="text-gray-600 text-sm">React Framework</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-2">Tailwind CSS</div>
              <div className="text-gray-600 text-sm">Styling</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-2">GitHub API</div>
              <div className="text-gray-600 text-sm">Data Source</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 mb-2">Lucide Icons</div>
              <div className="text-gray-600 text-sm">Icons</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To provide developers with a simple and beautiful way to discover GitHub profiles, 
            explore repositories, and connect with the amazing open-source community. 
            We believe in making developer tools both functional and easy to use.
          </p>
        </div>
      </div>
    </div>
  )
}
