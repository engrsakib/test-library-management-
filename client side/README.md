# 📚 Minimal Library Management System

A clean, easy-to-use library management app built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**.  
Live: [Minimal Library Management System](https://engrsakib-level-2-ass4.surge.sh/)  
GitHub: [engrsakib/test-library-management-](https://github.com/engrsakib/test-library-management-)

---

## 🎯 What is this?

This is a **frontend-only** project for managing a library.  
- No login, no complex filters—just books and borrow!
- You can view, add, edit, delete, and borrow books.
- Everything updates instantly with a modern, minimalist UI.

---

## ✨ Features

### 📖 Book Management
- View all books in a table — see title, author, genre, ISBN, copies, status, and actions.
- **Add Book**: Simple form to add new titles.
- **Edit Book**: Change info anytime.
- **Delete Book**: Remove books (with confirm).
- **Borrow Book**: Borrow by quantity and due date.
- Copies = 0? Book is marked unavailable automatically.

### 📊 Borrow Summary
- See which books have been borrowed and how many times.
- Aggregated, simple summary.

### 🧭 Navigation
- Navbar with links to:  
  - All Books
  - Add Book
  - Borrow Summary

- **All pages are public** (no login needed).

---

## 🗂️ Main Pages

- `/books` – All books table (view, edit, delete, borrow)
- `/create-book` – Add new book
- `/books/:id` – Book details
- `/edit-book/:id` – Edit book info
- `/borrow/:bookId` – Borrow form
- `/borrow-summary` – Borrowed book stats

---

## 🖥️ UI/UX

- **Minimalist**: Clean layout, readable, no clutter.
- **Responsive**: Looks great on mobile, tablet, and desktop.
- **Fast**: Instant UI updates powered by RTK Query.
- **Feedback**: All actions (add/edit/delete/borrow) show success or error messages.
- **Accessible**: Keyboard and screen reader friendly.

---

## ⚙️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit Query (RTK Query)](https://redux-toolkit.js.org/rtk-query/overview)
- [Tailwind CSS](https://tailwindcss.com/) (for styles)
- [REST API](#) (Replace with your own backend or mock API)

---

## 🚀 Getting Started

```bash
git clone https://github.com/engrsakib/test-library-management-.git
cd test-library-management-
npm install
npm run dev
# Then visit http://localhost:3000
```

**API Endpoint:**  
Make sure your API URL is set correctly in the RTK Query slice or environment variables.

---

## 📦 Folder Structure

```
src/
  components/      # Reusable UI components
  pages/           # Page components (Books, Create, Edit, Borrow, Summary, etc)
  features/        # RTK Query slices & state
  types/           # TypeScript types
  App.tsx
  main.tsx
  index.css
```

---

## 🙏 Credits

- Developed by [engrsakib](https://github.com/engrsakib)
- For learning, demo, and minimal library management use.


