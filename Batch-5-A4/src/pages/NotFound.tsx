"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <h1
            className={`text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            404
          </h1>
          <div className="absolute inset-0 text-8xl sm:text-9xl font-bold text-primary/20 -z-10 blur-sm">404</div>
        </div>

        {/* Illustration */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-base-100 rounded-full shadow-2xl flex items-center justify-center border border-base-300">
              {/* Search Icon SVG */}
              <svg className="w-24 h-24 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 -left-4 w-3 h-3 bg-accent rounded-full animate-bounce delay-500"></div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`mb-8 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-base-content mb-4">Oops! Page Not Found</h2>
          <p className="text-base-content/70 text-lg leading-relaxed mb-2">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
          <p className="text-base-content/50 text-sm">
            Don't worry, even the best explorers sometimes take a wrong turn!
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Link
            to="/"
            className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Fun Stats Card */}
        <div
          className={`mt-12 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="card bg-base-200/50 backdrop-blur-sm border border-base-300">
            <div className="card-body py-6">
              <h3 className="card-title text-lg justify-center text-base-content/80">Did you know?</h3>
              <p className="text-base-content/60 text-sm">
                The HTTP 404 error was named after room 404 at CERN, where the original web servers were located!
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float delay-500"></div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
