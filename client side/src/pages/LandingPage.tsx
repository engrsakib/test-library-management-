"use client"

import Blogs from "./Blogs"

export default function HeroSection() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16 min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        {/* Enhanced Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto">
          <div className="text-white text-center md:text-left max-w-xl space-y-8">
            {/* New Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>✨ AI-Powered Library System</span>
            </div>

            {/* Enhanced Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                Welcome
              </span>
              <br />
              <span>to Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Library
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl mb-6 text-blue-100 leading-relaxed">
              Explore, read and manage your books effortlessly. Your digital library companion with smart features and
              beautiful interface.
            </p>

            {/* Enhanced Buttons */}
            <div className="flex justify-center md:justify-start gap-4 flex-col sm:flex-row">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Book Table's
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Learn More
                </span>
              </button>
            </div>

            {/* New Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl mb-2">📚</div>
                <div className="text-2xl font-bold text-yellow-400">10K+</div>
                <div className="text-sm text-blue-200">Books</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-2xl font-bold text-yellow-400">5K+</div>
                <div className="text-sm text-blue-200">Readers</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl mb-2">📖</div>
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            {/* Decorative Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transform scale-150 animate-pulse"></div>

            {/* Main Image Container */}
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Library Illustration"
                className="w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl transform rotate-12 animate-bounce shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-white font-bold">📖</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl transform -rotate-12 animate-bounce delay-500 shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-white font-bold">📚</div>
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-pulse shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-white text-xs">✨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-blue-200">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Enhanced Blogs Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50">
        <Blogs />
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  )
}
