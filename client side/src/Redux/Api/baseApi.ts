import type { IBook } from "@/Types/Types";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";



type CreateBookDto = Omit<IBook, "_id" | "createdAt" | "updatedAt">;


 export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["book", "borrow"],
  endpoints: (builder) => ({

  
    getBooks: builder.query<IBook[], void>({
  query: () => "/book",
  transformResponse: (response: { success: boolean; result: IBook[] }) => response.result,
  providesTags: ["book", "borrow"],
}),




    // Spesific Books

 
    
    getBook: builder.query<IBook, string>({
  query: (id) => `book/${id}`,
  transformResponse: (response: { success: boolean; result: IBook }) => response.result,
  providesTags: ["book", "borrow"],
}),




    // createBook:builder.mutation< IBook, void>({
    //     query:(body) => ({
    //         url:"book",
    //         method:"POST",
    //         body:body
    //     }),
    //     invalidatesTags:['book']


    // }),

    // Update Opearation
  


    createBook: builder.mutation<IBook, CreateBookDto>({
  query: (body) => ({
    url: "book",
    method: "POST",
    body: body,
  }),
  invalidatesTags: ["book"],
}),







   updateBook: builder.mutation<IBook, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book", "borrow"],
    }),

    // Delete opearation



  



    deleteBook:builder.mutation({
        query:(id:string) =>({
            url: `book/${id}`,
            method:"DELETE"
        }),
        invalidatesTags:["book"]
    })




  }),
});


 export const {useCreateBookMutation, useDeleteBookMutation, useGetBookQuery, useGetBooksQuery, useUpdateBookMutation} = bookApi;
