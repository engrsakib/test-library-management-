import { useGetBorrowSummaryQuery } from "@/Redux/Api/borrowApi";



const BorrowSummary = () => {
  const { data: summary, isLoading } = useGetBorrowSummaryQuery();

  if (isLoading) return <p className="text-center">Loading summary...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold 
      text-transparent bg-clip-text bg-linear-to-t from bg-violet-500 to-indigo-500 text-center mt-6 mb-10
      flex flex-col gap-1.5
      "> <span><span className="text-white">🛒</span> Total Borrow Record Summary</span>
       <span className="text-transparent bg-clip-text bg-linear-to-t from bg-blue-500 to-pink-500"> Book Title, Copies Borrowed, and ISBN</span>
       </h2>
      {summary && summary.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>ISBN</th>
                <th>Total Quantity Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.isbn}</td>
                  <td>{item.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No books borrowed yet.</p>
      )}
    </div>
  );
};

export default BorrowSummary;
