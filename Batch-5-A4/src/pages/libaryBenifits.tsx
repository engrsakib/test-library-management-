const LibraryBenefits = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Benefits and Usage of Library Management System
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Easy and efficient management and tracking of books.</li>
          <li>Saves time in borrowing and returning books.</li>
          <li>Digital records allow quick access to book and loan status.</li>
          <li>Search functionality provides fast and accurate results.</li>
          <li>Easy control to add, edit, or remove books.</li>
          <li>View borrow summaries to analyze book usage.</li>
          <li>Ensures transparency and ease of use for students and readers.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Access the Library Management System.</li>
          <li>Select needed books from the list or add new books.</li>
          <li>Click “Borrow” to borrow a book, entering quantity and due date.</li>
          <li>Check the borrow summary page to view details and quantities.</li>
          <li>Update the system when returning books to make them available again.</li>
          <li>Regularly use the system to monitor book status and usage.</li>
        </ol>
      </section>
    </div>
  );
};

export default LibraryBenefits;
