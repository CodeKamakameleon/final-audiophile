import featured1 from "../images/home/mobile/image-speaker-zx9.png";
import featured3 from "../images/home/mobile/image-earphones-yx1.jpg";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-1">
        <img className="featured-1-img" src={featured1} alt="zx9-speaker" />
        <h3 className="featured-header-1">ZX3 SPEAKER</h3>
        <p className="featured-body">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="featured-btn">SEE PRODUCT</button>
      </div>

      <div className="featured-2">
        <h3 className="featured-header">ZX7 SPEAKER</h3>
        <button className="featured-2-btn">SEE PRODUCT</button>
      </div>

      <div className="featured-3">
        <img className="featured-3-img" src={featured3} alt="yx1-earphones" />
      </div>

      <div className="featured-4">
        <h3 className="featured-header">YX1 EARPHONES</h3>
        <button className="featured-4-btn">SEE PRODUCT</button>
      </div>
    </div>
  );
};
