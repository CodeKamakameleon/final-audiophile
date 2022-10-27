import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../images/cart/empty-cart.png";

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
