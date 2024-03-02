import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="about-container">
        <div>
        <Link to="/about"></Link>
        <h1 className="about-title">About Us</h1>
        <br />
        <p className="about-greeting"> Welcome to TrueGoods! </p>
        <br />
        <img src="../assets/search-w.png" alt="about-us-image" className="about-img" />
        <div className="about-contents">
        <p>
          {" "}
          Hey there! We're TrueGoods, your go-to destination for all things
          awesome. We're not your average e-commerce brand – we're the cool kids
          on the block, bringing you a curated selection of the coolest stuff
          around.
        </p>
        <br />
        <p>
          {" "}
          Who are we, you ask? Well, we're a bunch of passionate folks who
          believe that shopping should be more than just a transaction – it
          should be an experience. That's why we scour the globe to bring you
          the trendiest, most unique products that'll make you go "wow" every
          time you hit that add to cart button.{" "}
        </p>
        <br />
        <p>
          {" "}
          Whether you're looking for sleek gadgets to upgrade your tech game,
          stylish accessories to level up your fashion sense, or quirky gifts
          that'll earn you major brownie points, we've got you covered.
        </p>
        <br />
        <p>
          {" "}
          But TrueGoods isn't just about what you buy – it's about how you feel
          when you shop with us. We're all about good vibes, great service, and
          making sure you have a blast every step of the way.
        </p>
        <br />
        <p>
          {" "}
          Dive into our collection, discover something you love, and join the
          TrueGoods fam today. Trust us, you won't regret it. Let's make
          shopping cool again!
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
