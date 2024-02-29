import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'


function App() {

  return (
      <div> 
        <Navbar />
        <Sidebar />
        {/* <ProductCard /> */}
        <Footer />
      </div>
  )
}

export default App
