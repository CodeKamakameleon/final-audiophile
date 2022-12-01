import featured1mobile from "../images/home/mobile/image-speaker-zx9.png";
import featured3mobile from "../images/home/mobile/image-earphones-yx1.jpg";
import featured1tablet from "../images/home/tablet/image-speaker-zx9.png";
import featured3tablet from "../images/home/tablet/image-earphones-yx1.jpg";
import featured1desktop from "../images/home/desktop/image-speaker-zx9.png";
import featured3desktop from "../images/home/desktop/image-earphones-yx1.jpg";
// import featured2mobile from "../images/home/mobile/image-speaker-zx7.jpg";
// import featured2tablet from "../images/home/tablet/image-speaker-zx7.jpg";
// import featured2desktop from "../images/home/desktop/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";
import { useImageSize } from "../app/hooks";

const feature1Images = {
  mobile: featured1mobile,
  tablet: featured1tablet,
  desktop: featured1desktop,
};

// const feature2Images = {
//   mobile: featured2mobile,
//   tablet: featured2tablet.at,
//   desktop: featured2desktop,
// };

const feature3Images = {
  mobile: featured3mobile,
  tablet: featured3tablet,
  desktop: featured3desktop,
};

export const Featured = () => {
  const imageSize = useImageSize();

  return (
    <div className="featured">
      <div className="featured-1">
        <div className="featured1-imgContainer">
          <img
            className="featured-1-img"
            src={feature1Images[imageSize]}
            alt="zx9-speaker"
          />
        </div>
        <div className="featured-1-right">
          <h3 className="featured-header-1">ZX9 SPEAKER</h3>
          <p className="featured-body">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="featured-btn-container">
            <Link to={"/speakers/zx9-speaker"} className="featured-btn">
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>

      <div className="featured-2">
        <div className="featured2-left">
          <h3 className="featured-header">ZX7 SPEAKER</h3>
          <Link to={"/speakers/zx7-speaker"} className="featured-4-btn">
            SEE PRODUCT
          </Link>
        </div>
        {/* <img
          src={feature2Images[imageSize]}
          alt="zx7-speaker"
          className="featured2-img"
        /> */}
      </div>

      <div className="featured-3-4">
        <div className="featured-3">
          <img
            className="featured-3-img"
            src={feature3Images[imageSize]}
            alt="yx1-earphones"
          />
        </div>

        <div className="featured-4">
          <h3 className="featured-header">YX1 EARPHONES</h3>
          <Link to={"/earphones/yx1-earphones"} className="featured-4-btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};
