import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="mbl-nav">
            <Link to="/home">Home</Link>
            <Link to="/headphones">Headphones</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/earphones">Earphones</Link>
          </div>
        )}
      </div>

      <div className="nav2">
        <h2 className="header">audiophile</h2>
        <img
          className="cart-icon"
          src="./images/cart/empty-cart.png"
          alt="cart-img"
        />
      </div>

      <div className="nav-desktop">
        <Link to="/home">Home</Link>
        <Link to="/headphones">Headphones</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/earphones">Earphones</Link>
      </div>
    </nav>
  );
};
