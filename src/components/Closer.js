import closerImg from "../images/shared/mobile/image-best-gear.jpg";

export const Closer = () => {
  return (
    <div className="closer">
      <img className="closer-img" src={closerImg} alt="closer-img" />
      <div className="closer-text">
        <h3 className="closer-header">
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h3>
        <p className="closer-body">
          Located at the heart of New York City, Audiophile is the premiere
          store for high end headphones, earphones, speakers and audio
          accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
