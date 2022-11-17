import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-header footer-left">audiophile</h2>
      <div className="footer-links footer-right">
        <Link className="footer-link" to="/home">
          Home
        </Link>
        <Link className="footer-link" to="/headphones">
          Headphones
        </Link>
        <Link className="footer-link" to="/speakers">
          Speakers
        </Link>
        <Link className="footer-link" to="/earphones">
          Earphones
        </Link>
      </div>
      <p className="footer-body footer-left">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <p className="footer-copyright footer-left">
        {" "}
        Copyright 2021. All Rights Reserved
      </p>

      <div className="footer-icons">
        <ImFacebook2 className="footer-icon" />
        <ImTwitter className="footer-icon" />
        <ImInstagram className="footer-icon" />
      </div>
    </footer>
  );
};
