import featured1 from "../images/home/mobile/image-speaker-zx9.png";
import featured3 from "../images/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-1">
        <img className="featured-1-img" src={featured1} alt="zx9-speaker" />
        <div className="featured-1-right">
          <h3 className="featured-header-1">ZX9 SPEAKER</h3>
          <p className="featured-body">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={"/speakers/zx9-speaker"} className="featured-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="featured-2">
        <h3 className="featured-header">ZX7 SPEAKER</h3>
        <Link to={"/speakers/zx7-speaker"} className="orange-btn">
          SEE PRODUCT
        </Link>
      </div>

      <div className="featured-3-4">
        <div className="featured-3">
          <img className="featured-3-img" src={featured3} alt="yx1-earphones" />
        </div>

        <div className="featured-4">
          <h3 className="featured-header">YX1 EARPHONES</h3>
          <Link to={"/earphones/yx1-earphones"} className="orange-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};
