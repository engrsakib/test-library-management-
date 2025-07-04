import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateBookMutation } from "@/Redux/Api/baseApi"
import { useForm } from "react-hook-form"
import type { IBook } from "@/Types/Types"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.string().min(1, "Genre is required"),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z.coerce.number().min(1, "At least 1 copy is required"),
})

type BookFormData = z.infer<typeof bookSchema>

const CreateBook = () => {
  const navigate = useNavigate()
  const [createBook, { isLoading, isError }] = useCreateBookMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  })

  const onSubmit = async (data: BookFormData) => {
    const payload: Omit<IBook, "_id" | "createdAt" | "updatedAt"> = {
      ...data,
      available: true,
    }

    try {
      await createBook(payload).unwrap()

      Swal.fire({
        icon: "success",
        title: "Book Created!",
        text: "The book has been added successfully.",
        timer: 2000,
        showConfirmButton: false,
      })
      navigate("/book-table")
    } catch (error) {
      console.error("Failed to create book:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="loading loading-bars loading-xl text-primary mb-4"></div>
          <p className="text-lg text-gray-600 animate-pulse">Creating your book...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-600 mb-4">
            <span>📚</span>
            <span>Library Management</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Add New Book
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Fill in the details below to add a new book to your digital library collection.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Book Title
                </span>
              </label>
              <input
                type="text"
                {...register("title")}
                className="input input-bordered w-full bg-white/70 border-gray-200 focus:border-blue-400 focus:bg-white transition-all duration-300 text-lg"
                placeholder="Enter the book title..."
              />
              {errors.title && (
                <div className="flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                </div>
              )}
            </div>

            {/* Author Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Author Name
                </span>
              </label>
              <input
                type="text"
                {...register("author")}
                className="input input-bordered w-full bg-white/70 border-gray-200 focus:border-green-400 focus:bg-white transition-all duration-300 text-lg"
                placeholder="Enter author's name..."
              />
              {errors.author && (
                <div className="flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-500 text-sm">{errors.author.message}</p>
                </div>
              )}
            </div>

            {/* Genre and ISBN Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Genre Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    Genre
                  </span>
                </label>
                <input
                  type="text"
                  {...register("genre")}
                  className="input input-bordered w-full bg-white/70 border-gray-200 focus:border-purple-400 focus:bg-white transition-all duration-300 text-lg"
                  placeholder="e.g., Fiction, Mystery..."
                />
                {errors.genre && (
                  <div className="flex items-center gap-2 mt-2">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-500 text-sm">{errors.genre.message}</p>
                  </div>
                )}
              </div>

              {/* ISBN Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold text-gray-700 flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    ISBN
                  </span>
                </label>
                <input
                  type="text"
                  {...register("isbn")}
                  className="input input-bordered w-full bg-white/70 border-gray-200 focus:border-orange-400 focus:bg-white transition-all duration-300 text-lg"
                  placeholder="978-0-123456-78-9"
                />
                {errors.isbn && (
                  <div className="flex items-center gap-2 mt-2">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-500 text-sm">{errors.isbn.message}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Description Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Description
                  <span className="text-sm text-gray-500 font-normal">(Optional)</span>
                </span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered w-full h-24 bg-white/70 border-gray-200 focus:border-indigo-400 focus:bg-white transition-all duration-300 text-lg resize-none"
                placeholder="Brief description of the book..."
              />
            </div>

            {/* Copies Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  Number of Copies
                </span>
              </label>
              <input
                type="number"
                {...register("copies")}
                className="input input-bordered w-full bg-white/70 border-gray-200 focus:border-teal-400 focus:bg-white transition-all duration-300 text-lg"
                placeholder="1"
                min="1"
              />
              {errors.copies && (
                <div className="flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-500 text-sm">{errors.copies.message}</p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none text-lg py-4 h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-3">
                    <span className="loading loading-spinner loading-sm"></span>
                    Creating Book...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Create Book
                  </span>
                )}
              </button>
            </div>

            {/* Error Message */}
            {isError && (
              <div className="alert alert-error bg-red-50 border border-red-200 rounded-2xl">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-red-700 font-medium">{isError || "Something went wrong. Please try again."}</span>
              </div>
            )}
          </form>
        </div>

      
      </div>
    </div>
  )
}

export default CreateBook
