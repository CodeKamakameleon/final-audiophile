import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-header">audiophile</h2>
      <div className="footer-links">
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
      <p className="footer-body">
        Audiophile is an all in one stop to fulfill your audio needs. We're
        asmall team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <p className="footer-copyright"> Copyright 2021. All Rights Reserved</p>
    </footer>
  );
};
