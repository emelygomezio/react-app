import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import ProductCard from "./components/ProductCard.jsx";
import { Routes, Route } from 'react-router-dom';

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icon'*/

function App() {
  return (
    <>
        <div className="page-container">
          <div className="content-wrap">
            {/*<FontAwesomeIcon icon={faGithub} />*/}

            <Navbar />

            <Routes>               
                <Route path="/" element={<Navbar />}/>
                <Route path="/Products" element={<ProductCard/>} />
                <Route path="/Features" element={<ProductCard/>} />

                <Route path="*" element={<ErrorPage/>} />
            </Routes>

            <Sidebar />

            {/*<ProductCard /> */}
            <Footer />
          </div>
        </div>
    </>
  );
}

export default App;
