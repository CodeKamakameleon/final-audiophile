import { Twirl as Hamburger } from "hamburger-react";
import headphonesImg from "../../images/category-headphones/mobile/image-xx99-mark-one.jpg";
import speakerImg from "../../images/category-speakers/mobile/image-zx9.jpg";
import earphonesImg from "../../images/category-earphones/mobile/image-yx1-earphones.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
// import { useSelector } from "react-redux";

export const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  //   const IsOpen = useSelector((state) => state.burger.IsOpen);

  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={clsx(`mbl-nav ${isOpen ? "page-burger-open" : ""}`)}>
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
    </div>
  );
};
