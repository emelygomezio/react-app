import tgback from '../assets/tgback.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (

    <div style={{ 
        width: '100vw',
        height: '100vh',
      }}>    
            <h4 className="home-subheadline"> Find Something Cool Today</h4>
            <h1 className="home-headline"> Get Up To 30% Off New Arrivals! </h1>
                {/* <img src={tgback} alt="Home Background" className="home-background" /> */}
            <button className="home-button"> <Link to="/products"> Buy Now</Link></button>
   </div>  
  )
}

export default HomePage