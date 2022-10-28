import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../images/cart/empty-cart.png";
import headphonesImg from "../images/category-headphones/mobile/image-xx99-mark-one.jpg";
import speakerImg from "../images/category-speakers/mobile/image-zx9.jpg";
import earphonesImg from "../images/category-earphones/mobile/image-yx1-earphones.jpg";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="mbl-nav">
            <div className="nav-card">
              <img src={headphonesImg} alt="img-xx99-mark-1" />
              <p className="card-header">HEADPHONES</p>
              <button className="card-btn">
                SHOP <span>&gt;</span>{" "}
              </button>
            </div>
            <div className="nav-card">
              <img src={speakerImg} alt="speaker-img" />
              <p className="card-header">SPEAKERS</p>
              <button className="card-btn">
                SHOP <span>&gt;</span>
              </button>
            </div>
            <div className="nav-card">
              <img src={earphonesImg} alt="earphones-img" />
              <p className="card-header">EARPHONES</p>
              <button className="card-btn">
                SHOP <span>&gt;</span>{" "}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="nav2">
        <h2 className="header">audiophile</h2>
        <div className="nav-desktop">
          <Link to="/home">Home</Link>
          <Link to="/headphones">Headphones</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/earphones">Earphones</Link>
        </div>
        <img className="cart-icon" alt="cart-icon" src={emptyCart} />
      </div>
    </nav>
  );
};
