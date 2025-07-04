import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBookMutation } from "@/Redux/Api/baseApi";
import { useForm } from "react-hook-form";
import type { IBook } from "@/Types/Types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.string().min(1, "Genre is required"),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z.coerce.number().min(1, "At least 1 copy is required"),
});

type BookFormData = z.infer<typeof bookSchema>;

const CreateBook = () => {
  const navigate =useNavigate();

  const [createBook, { isLoading, isError }] = useCreateBookMutation();

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = async (data: BookFormData) => {
    const payload: Omit<IBook, "_id" | "createdAt" | "updatedAt" > = {
      ...data,
      available: true,
    };

    try {
      await createBook(payload).unwrap();
      

        Swal.fire({
      icon: "success",
      title: "Book Created!",
      text: "The book has been added successfully.",
      timer: 2000,
      showConfirmButton: false,
    });
    navigate("/book-table")




    } catch (error) {
      console.error("Failed to create book:", error);
    }
  };

   if (isLoading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">➕ Add New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            {...register("title")}
            className="input input-bordered w-full"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="label">Author</label>
          <input
            type="text"
            {...register("author")}
            className="input input-bordered w-full"
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label className="label">Genre</label>
          <input
            type="text"
            {...register("genre")}
            className="input input-bordered w-full"
          />
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre.message}</p>
          )}
        </div>

  



        <div>
          <label className="label">ISBN</label>
          <input
            type="text"
            {...register("isbn")}
            className="input input-bordered w-full"
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn.message}</p>
          )}
        </div>

        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
          />
        </div>

        <div>
          <label className="label">Copies</label>
          <input
            type="number"
            {...register("copies")}
            className="input input-bordered w-full"
          />
          {errors.copies && (
            <p className="text-red-500 text-sm">{errors.copies.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Create Book"}
        </button>
        {/* Error dakhano  */}
        <div>
          {isError && (
            <p style={{ color: "red" }}>
              {isError || "Something went wrong"}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
