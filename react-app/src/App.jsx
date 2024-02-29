import "./App.css";
import Navbar from './components/Navbar.jsx';
/*import Sidebar from './components/Sidebar.jsx';*/
import Footer from './components/Footer.jsx';
import ProductCard from './components/ProductCard.jsx';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import ProductPage from './components/ProductPage.jsx'

function App() {
  return (
    <>
        <div className="page-container">
          <div className="content-wrap">

            <FaBars className="bars-icon"/>
            <AiOutlineClose />
            <Navbar />

            {/*<Sidebar />*/}
            <h1 className="product-title"> New Products</h1>

            <ProductCard /> 
            <Footer />
          </div>
        </div>
    </>
  );
}

export default App;
