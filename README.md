# 📚 Minimal Library Management System

A minimal, modern library management system built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. This project demonstrates clean UI, state management, and seamless API integration for book management and borrow tracking—**all without authentication or unnecessary complexity**.

**Live Demo:**  
🔗 [Minimal Library Management System Live](https://engrsakib-level-2-ass4.surge.sh/)

**GitHub Repo:**  
🔗 [engrsakib/test-library-management-](https://github.com/engrsakib/test-library-management-)

---

## 🚀 Project Overview

The Minimal Library Management System is a client-side web application focused on core library operations. Users can view, add, edit, delete, and borrow books, as well as see a summary of all borrowed books. The design emphasizes clarity, speed, and ease-of-use, making it perfect for learning or adapting into a simple library workflow.

---

## ✨ Features

### 1. Public Access

- **No authentication**: All features are accessible to everyone.
- **No payment, category, or filter complexity**: The focus is on essential book and borrowing features only.

### 2. Book Management

- **Book List Table**:  
  - Displays all books in a tabular format.
  - Columns: Title, Author, Genre, ISBN, Copies, Availability, Actions.
- **Actions**:  
  - **Edit Book**: Edit details in a pre-filled form. Updates are reflected instantly.
    - *Logic*: If copies = 0, marks as unavailable.
  - **Delete Book**: Confirmation modal before removal.
  - **Borrow Book**: Opens a borrow form for the chosen book.

- **Add New Book**:  
  - Dedicated form to add a new book.
  - Required fields: Title, Author, Genre, ISBN, Description, Copies (Availability optional, defaults to true).
  - Redirects to book list and updates UI after successful creation.

### 3. Borrow Book

- **Borrow Form**:  
  - Accessible from "Borrow" button in the book list.
  - Fields: Quantity (cannot exceed available copies), Due Date.
  - Business logic:
    - Borrowed quantity cannot exceed available copies.
    - If copies reach zero, the book is marked unavailable.
  - On submit, updates API and UI, then redirects to Borrow Summary with a success message.

### 4. Borrow Summary

- **Aggregated Summary of Borrows**
  - Lists all borrowed books with total quantity borrowed per book.
  - Columns: Book Title, ISBN, Total Quantity Borrowed.
  - Data fetched from a REST aggregation endpoint.

---

## 🗂️ Page List

- `/books` – All books table/grid with action buttons.
- `/create-book` – Add a new book.
- `/books/:id` – Detailed view for a single book.
- `/edit-book/:id` – Edit form for existing book.
- `/borrow/:bookId` – Borrow form for a selected book.
- `/borrow-summary` – Aggregated borrow summary.

---

## 🖥️ UI/UX

- **Minimalist & Modern**: Clean layout using [Tailwind CSS](https://tailwindcss.com/) or plain CSS.
- **User Friendly**:  
  - Simple and intuitive navigation.
  - Clearly labeled buttons and forms.
  - Action confirmations and success messages.
- **Responsive**: Fully adapts to mobile, tablet, and desktop.

---

## 🧩 Tech Stack

- **React** (with functional components)
- **Redux Toolkit Query (RTK Query)**
- **TypeScript** for type safety
- **RESTful API Integration**
- **Tailwind CSS** (or plain CSS)

---

## 🏁 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/engrsakib/test-library-management-.git
   cd test-library-management-
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure API Endpoint**
   - Edit your API base URL in the RTK Query API slice or environment variable as required.

4. **Start the App**
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

5. **Visit**  
   - Open [http://localhost:3000](http://localhost:3000) in your browser, or use the [live demo](https://engrsakib-level-2-ass4.surge.sh/).

---

## 📋 Folder Structure

```
src/
├── components/
├── pages/
├── features/       # RTK Query slices
├── types/
├── App.tsx
├── main.tsx
├── index.css
└── ...
```

---

## 🙏 Credits

Created by [engrsakib](https://github.com/engrsakib)  
Minimal Library Management System – For demo, learning, and simple library workflows.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).