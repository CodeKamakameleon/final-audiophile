import headphonesImg from "../images/category-headphones/mobile/image-xx99-mark-one.jpg";
import speakerImg from "../images/home/mobile/image-speaker-zx9.png";
import earphonesImg from "../images/category-earphones/mobile/image-yx1-earphones.jpg";

export const Shopbar = () => {
  return (
    <div className="shopbar">
      <div className="card">
        <img src={headphonesImg} alt="img-xx99-mark-1" />
        <p className="card-header">HEADPHONES</p>
        <button className="card-btn">
          SHOP <span>&gt;</span>{" "}
        </button>
      </div>
      <div className="card">
        <img src={speakerImg} alt="speaker-img" />
        <p className="card-header">SPEAKERS</p>
        <button className="card-btn">
          SHOP <span>&gt;</span>
        </button>
      </div>
      <div className="card">
        <img src={earphonesImg} alt="earphones-img" />
        <p className="card-header">EARPHONES</p>
        <button className="card-btn">
          SHOP <span>&gt;</span>{" "}
        </button>
      </div>
    </div>
  );
};
