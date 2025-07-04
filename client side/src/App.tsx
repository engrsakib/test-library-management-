import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./pages/LandingPage";
import Blogs from "./pages/Blogs";

function App() {
  return <div className="max-w-7xl mx-auto ">


    <Navbar></Navbar>
    {/* <HeroSection></HeroSection>
    <Blogs></Blogs> */}


   <Outlet></Outlet>
  
   <div className="lg:mt-[170px]">
    <Footer></Footer>
   </div>
  </div>;
}

export default App;
