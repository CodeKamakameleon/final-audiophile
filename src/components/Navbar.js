import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && <div className="mbl-nav"></div>}
      </div>

      <div>
        <h2>audiophile</h2>
        <img src="./assets/images/cart/empty-cart.png" alt="cart-img" />
      </div>
    </nav>
  );
};
