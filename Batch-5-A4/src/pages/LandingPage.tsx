import Blogs from "./Blogs";

export default function HeroSection() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="text-white text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your Library
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Explore, read and manage your books effortlessly. Your digital
              library companion.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Book Table's
              </button>

              <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="Library Illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>


      {/* Blogs parts */}

      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
}
