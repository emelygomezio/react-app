import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';
import ProductCard from './components/ProductCard.jsx';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import ProductDetailsPage from "./components/ProductDetailsPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProductList from "./components/ProductList.jsx";
import { Link } from 'react-router-dom';
import productsData from "./assets/products.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdHomeFilled } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import HomePage from "./components/HomePage.jsx";


function App() {
  return (
    <>
        <div className="App">
          <div className="content-wrap">
            <div className="page-container">
            <Navbar />           
            <HomePage />
            <Routes>
              <Route path="/about" element={<AboutPage />}/>
              {/* <Route path="/products" element= {<ProductList/>}  /> */}
              <Route path="/View-More/:productId" element={<ProductDetailsPage products={productsData}/>} />
              {/* <Route path="/View-More" element={<ProductDetailsPage products={productsData}/>} /> */}
              <Route path="*" element={ <ErrorPage /> } />
            </Routes>
            <Footer />


            {/* {Roters about page} */}

          </div>
          </div>

        </div>
    </>
  );
}

export default App;




// import "./App.css";
// import Navbar from "./components/Navbar";

// // import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ErrorPage from "./pages/ErrorPage";
// import HomePageWithNavigate from "./pages/HomePageWithNavigate";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage";
// import QueryStringExample from "./pages/QueryStringExample";

// import { Routes, Route } from "react-router-dom";
// import projectsData from './projects-data.json';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
      
//       <Routes>
//         {/* <Route  path="/" element={ <HomePage /> } /> */}

//         <Route path="/" element={ <HomePageWithNavigate /> } />
//         <Route path="/about" element={ <AboutPage /> } />
        
//         <Route
//           path="/projects"
//           element={ <ProjectsPage projects={projectsData} /> }
//         />

//         <Route 
//           path="/projects/:projectId" 
//           element={ <ProjectDetailsPage projects={projectsData} /> } 
//         />

//         <Route 
//           path="/example" 
//           element={ <QueryStringExample /> } 
//         />

//         <Route path="*" element={ <ErrorPage /> } />
//       </Routes>
//     </div>
//   );
// }

// export default App;


