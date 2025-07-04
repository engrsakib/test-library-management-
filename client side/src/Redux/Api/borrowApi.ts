import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BorrowPayload {
  bookId: string;
  quantity: number;
  dueDate: string;
}

interface BorrowSummary {
  title: string;
  isbn: string;
  totalQuantity: number;
}

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-assignmnet4.vercel.app",
  }),
  tagTypes: ["borrow", "book"],
  endpoints: (builder) => ({
    // Borrow Book POST
    borrowBook: builder.mutation<{ message: string }, BorrowPayload>({
      query: (data) => ({
        url: "borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book", "borrow"],
    }),

    // Get Summary
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => "borrow",
      providesTags: ["borrow"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
