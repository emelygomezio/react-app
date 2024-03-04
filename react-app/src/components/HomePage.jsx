import tgback from '../assets/tgback.png';

const HomePage = () => {
  return (
    <div>
        <img src={tgback} alt="Home Background" className="home-background">
            <h4 className="home-subheadline"> Find Something Cool Today</h4>
            <h1 className="home-headline"> Get Up To 30% Off New Arrivals! </h1>
            <button className="home-button"> <Link>Buy Now</Link></button>
        </img>
    </div>
  )
}

export default HomePage