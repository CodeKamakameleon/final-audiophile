import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { Cart } from "../features/cart/Cart";
import { Burger } from "../features/hamburger/Hamburger";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="navbar">
        <Burger />
        <div className="nav2">
          <div className="header-container">
            <h2 className="header">audiophile</h2>
          </div>
          <div className="nav-desktop">
            <NavLink
              className={({ isActive }) =>
                clsx("nav-link", { "nav-link-active": isActive })
              }
              to="/home"
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx("nav-link", { "nav-link-active": isActive })
              }
              to="/headphones"
            >
              HEADPHONES
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx("nav-link", { "nav-link-active": isActive })
              }
              to="/speakers"
            >
              SPEAKERS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx("nav-link", { "nav-link-active": isActive })
              }
              to="/earphones"
            >
              EARPHONES
            </NavLink>
          </div>
          <Cart />
        </div>
      </div>
      <div className="nav-border" />
    </nav>
  );
};
