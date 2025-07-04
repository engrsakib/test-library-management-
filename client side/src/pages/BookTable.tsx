/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { useGetBooksQuery, useDeleteBookMutation } from "@/Redux/Api/baseApi"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import BorrowModal from "@/Components/BorrowModal"

interface Book {
  _id: string
  title: string
  author: string
  isbn: string
  copies: number
  description?: string
  available: boolean
}

const BookTable = () => {
  const { data: books, isLoading, refetch } = useGetBooksQuery(undefined)
  const [deleteBook] = useDeleteBookMutation()

  // Modal State Management
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    })

    if (confirm.isConfirmed) {
      try {
        await deleteBook(id).unwrap()
        Swal.fire("Deleted!", "The book has been deleted.", "success")
      } catch (err) {
        Swal.fire("Error!", "Failed to delete the book.", "error")
      }
    }
  }

  const handleBorrowClick = (book: Book) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="text-center">
          <div className="loading loading-bars loading-xl text-primary mb-4"></div>
          <p className="text-lg text-gray-600 animate-pulse">Loading books...</p>
        </div>
      </div>
    )

  // Calculate statistics
  const totalBooks = books?.length || 0
  const availableBooks = books?.filter((book: Book) => book.copies > 0).length || 0
  const totalCopies = books?.reduce((sum: number, book: Book) => sum + book.copies, 0) || 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2 text-sm font-medium text-indigo-600 mb-4">
            <span>📚</span>
            <span>Library Collection</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Available Books
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-normal bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              & Borrow Records
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Browse through our extensive collection of books. Edit, delete, or borrow books with just a few clicks.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{totalBooks}</p>
                  <p className="text-sm text-gray-600">Total Books</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{availableBooks}</p>
                  <p className="text-sm text-gray-600">Available</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{totalCopies}</p>
                  <p className="text-sm text-gray-600">Total Copies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Table Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Book Collection & Management
            </h3>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">#</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      Title
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Author
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      ISBN
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                      Copies
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Description
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Status
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                        />
                      </svg>
                      Actions
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {books?.map((book: Book, index: number) => (
                  <tr
                    key={book._id}
                    className="hover:bg-gray-50/50 transition-colors duration-200 border-b border-gray-100"
                  >
                    <td className="py-4 px-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {book.title.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{book.title}</p>
                          <p className="text-sm text-gray-500">Book #{index + 1}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-xs">
                            {book.author.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium text-gray-700">{book.author}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {book.isbn}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-2xl font-bold text-center min-w-[60px]">
                        {book.copies}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="max-w-xs">
                        <p className="text-gray-600 text-sm truncate" title={book.description || "N/A"}>
                          {book.description || "N/A"}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {book.copies > 0 ? (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                            Available
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-red-600 font-semibold bg-red-100 px-3 py-1 rounded-full text-sm">
                            Unavailable
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2 flex-wrap">
                        <Link
                          to={`/edit-book/${book._id}`}
                          className="btn btn-sm bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(book._id)}
                          className="btn btn-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                        <button
                          onClick={() => handleBorrowClick(book)}
                          className={`btn btn-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                            book.copies === 0
                              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                              : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-none"
                          }`}
                          disabled={book.copies === 0}
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          Borrow
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                Showing {books?.length || 0} book{(books?.length || 0) !== 1 ? "s" : ""} with {totalCopies} total copies
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Unavailable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Borrow Modal */}
      <BorrowModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          refetch()
        }}
        book={selectedBook}
      />
    </div>
  )
}

export default BookTable
