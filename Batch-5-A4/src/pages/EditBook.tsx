
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { data, useNavigate, useParams } from 'react-router-dom';
import { useGetBookQuery, useUpdateBookMutation } from '@/Redux/Api/baseApi';
import React from 'react';
import Swal from 'sweetalert2';

const bookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  genre: z.string().min(1, 'Genre is required'),
  isbn: z.string().min(1, 'ISBN is required'),
  description: z.string().optional(),
  copies: z.coerce.number().min(1, 'Minimum 1 copy required'),
});

type BookFormData = z.infer<typeof bookSchema>;

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading } = useGetBookQuery(id!);
  console.log(book)
  const [updateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });


  React.useEffect(() => {
    if (book) {
      reset(book); 
    }
  }, [book, reset]);

  const onSubmit = async (data: BookFormData) => {
    if (!id) return;
     try {
      await updateBook({ id, data });

          Swal.fire({
      icon: 'success',
      title: 'Updated Successfully!',
      showConfirmButton: false,
      timer: 1500,
    });


    console.log(data)

    navigate('/book-table');
     } catch (error) {

      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong while updating!',
    });
      
     }
  };

  if (isLoading || !book) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input {...register('title')} className="input input-bordered w-full" />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <label className="label">Author</label>
          <input {...register('author')} className="input input-bordered w-full" />
          {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
        </div>

        <div>
          <label className="label">Genre</label>
          <input {...register('genre')} className="input input-bordered w-full" />
          {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
        </div>

        <div>
          <label className="label">ISBN</label>
          <input {...register('isbn')} className="input input-bordered w-full" />
          {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
        </div>

        <div>
          <label className="label">Description</label>
          <textarea {...register('description')} className="textarea textarea-bordered w-full" />
        </div>

        <div>
          <label className="label">Copies</label>
          <input type="number" {...register('copies')} className="input input-bordered w-full" />
          {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
        </div>

        <button type="submit" className="btn btn-success w-full">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;









