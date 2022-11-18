import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import headphonesImg from "../images/category-headphones/mobile/image-xx99-mark-one.jpg";
import speakerImg from "../images/category-speakers/mobile/image-zx9.jpg";
import earphonesImg from "../images/category-earphones/mobile/image-yx1-earphones.jpg";
import { Cart } from "../features/cart/Cart";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="navbar">
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div className="mbl-nav">
              <div className="nav-card">
                <img src={headphonesImg} alt="img-xx99-mark-1" />
                <p className="card-header">HEADPHONES</p>
                <Link to="/headphones" className="card-btn">
                  SHOP <span>&gt;</span>{" "}
                </Link>
              </div>
              <div className="nav-card">
                <img src={speakerImg} alt="speaker-img" />
                <p className="card-header">SPEAKERS</p>
                <Link to="/speakers" className="card-btn">
                  SHOP <span>&gt;</span>
                </Link>
              </div>
              <div className="nav-card">
                <img src={earphonesImg} alt="earphones-img" />
                <p className="card-header">EARPHONES</p>
                <Link to="/earphones" className="card-btn">
                  SHOP <span>&gt;</span>{" "}
                </Link>
              </div>
            </div>
          )}
        </div>

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
