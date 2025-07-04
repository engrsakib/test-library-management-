import App from "@/App";
import Blogs from "@/pages/Blogs";
import BookTable from "@/pages/BookTable";
import BorrowSummary from "@/pages/borrowSummary";
import CreateBook from "@/pages/createBook";
import EditBook from "@/pages/EditBook";
import HeroSection from "@/pages/LandingPage";
import LibraryBenefits from "@/pages/libaryBenifits";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children:[

           
            {
                path:'/',
                element:<HeroSection></HeroSection>
            },
            {
                path:'book-table',
                element:<BookTable></BookTable>
            },
          
          
            {
                path:'add-book',
                element:<CreateBook></CreateBook>
            },
            {
                  path: 'edit-book/:id',
                element:<EditBook></EditBook>
            },
            {
                path:'borrow-summary',
                element:<BorrowSummary></BorrowSummary>
            },
       
            {
                path:'blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'benifits',
                element:<LibraryBenefits></LibraryBenefits>
            },
            {
                path:'not-found',
                element:<NotFound></NotFound>
            },
         
        ]
    }
]);

export default router;