
import { useState } from 'react';
import { useBorrowBookMutation } from '@/Redux/Api/borrowApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface BorrowModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    _id: string;
    title: string;
    copies: number;
  } | null;
}

const BorrowModal = ({ isOpen, onClose, book }: BorrowModalProps) => {
  const [quantity, setQuantity] = useState<string>('1'); // ✅ string type
  const [dueDate, setDueDate] = useState('');
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!book) return;

    const quantityNumber = Number(quantity);

    // Validation
    if (isNaN(quantityNumber) || quantityNumber <= 0) {
      Swal.fire('Error', 'Quantity must be greater than zero.', 'error');
      return;
    }

    if (quantityNumber > book.copies) {
      Swal.fire('Error', `You can borrow a maximum of ${book.copies} copies.`, 'error');
      return;
    }

    if (!dueDate) {
      Swal.fire('Error', 'Please select a due date.', 'error');
      return;
    }

    const payload = {
      bookId: book._id,
      quantity: quantityNumber,
      dueDate,
    };

    try {
      await borrowBook(payload).unwrap();
      Swal.fire('Success!', 'Book borrowed successfully!', 'success');
      onClose();
      navigate('/borrow-summary');
    } catch (err) {
      console.error('Failed to borrow book:', err);
      Swal.fire('Error!', 'Failed to borrow the book.', 'error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Borrow: {book?.title}</h2>
        <p className="mb-4 text-gray-600">Available Copies: {book?.copies}</p>

        <form onSubmit={handleSubmit}>
          {/* Quantity Field */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              max={book?.copies}
              className="mt-1 input input-bordered w-full"
              required
            />
          </div>

          {/* Due Date Field */}
          <div className="mb-6">
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 input input-bordered w-full"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Confirm Borrow'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowModal;
