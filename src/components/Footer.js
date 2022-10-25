import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <h2>audiophile</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/headphones">Headphones</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/earphones">Earphones</Link>
      </div>
      <p>
        Audiophile is an all in one stop o fulfill your audio needs. We're
        asmall team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility- we're open 7 days a week.
      </p>
    </footer>
  );
};
