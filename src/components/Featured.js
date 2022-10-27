import zx9Speaker from "../images/product-zx9-speaker/mobile/image-product.jpg";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-1">
        <img className="zx9-img" src={zx9Speaker} alt="zx9-speaker" />
        <h3 className="featured-header-1">ZX3 SPEAKER</h3>
        <p className="featured-body">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="featured-btn">SEE PRODUCT</button>
      </div>

      <div className="featured-2">
        <h3 className="featured-header">ZX7 SPEAKER</h3>
        <button className="featured-btn-2">SEE PRODUCT</button>
      </div>

      <div className="featured-3">
        <img alt="yx1-earphones" />
      </div>

      <div className="featured-4">
        <h3 className="featured-header">YX1 EARPHONES</h3>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  );
};
