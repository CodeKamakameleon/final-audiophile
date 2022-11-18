import { useImageSize } from "../app/hooks";

import closerMobile from "../images/shared/mobile/image-best-gear.jpg";
import closerTablet from "../images/shared/tablet/image-best-gear.jpg";
import closerDesktop from "../images/shared/desktop/image-best-gear.jpg";

const images = {
  mobile: closerMobile,
  tablet: closerTablet,
  desktop: closerDesktop,
};

export const Closer = () => {
  const imageSize = useImageSize();

  return (
    <div>
      <div className="closer">
        <img className="closer-img" src={images[imageSize]} alt="closer-img" />
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
    </div>
  );
};
