import { useState } from "react";
import { useGetBooksQuery, useDeleteBookMutation } from "@/Redux/Api/baseApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BorrowModal from "@/Components/BorrowModal";


interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  copies: number;
  description?: string;
  available: boolean;
}

const BookTable = () => {
  const { data: books, isLoading, refetch } = useGetBooksQuery(undefined); // এখানে undefined বা আর্গুমেন্ট পাস করুন
  const [deleteBook] = useDeleteBookMutation();

  // Modal State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire("Deleted!", "The book has been deleted.", "success");
      } catch (err) {
        Swal.fire("Error!", "Failed to delete the book.", "error");
      }
    }
  };

  const handleBorrowClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  if (isLoading) return <p className="text-center">Loading books...</p>;

  return (
    <div>

      {/* Landing page */}

     

  



      <div className="overflow-x-auto">
        <h2
          className="text-2xl font-bold 
      text-transparent bg-clip-text bg-linear-to-t from bg-violet-500 to-indigo-500 text-center mt-6 mb-10
      "
        >
          {" "}
          Available Books and Borrow Records{" "}
        </h2>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Copies</th>
              <th>Description</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book: Book, index: number) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.copies}</td>
                <td>{book.description || "N/A"}</td>
                {/* avilable is added */}

                <td>
                  {book.copies > 0 ? (
                    <span className="text-green-500 font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Unavailable
                    </span>
                  )}
                </td>

                <td className="flex gap-2">
                  <Link
                    to={`/edit-book/${book._id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleBorrowClick(book)}
                    className="btn btn-sm btn-info"
                    disabled={book.copies === 0}
                  >
                    Borrow Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <BorrowModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            refetch();
          }}
          book={selectedBook}
        />
      </div>
    </div>
  );
};

export default BookTable;
