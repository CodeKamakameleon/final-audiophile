import { Link } from "react-router-dom";

export const Banner = ({ data, product }) => {
  return (
    <div className="banner">
      <div className="banner-header1">NEW PRODUCT</div>
      <h2 className="banner-header2">
        XX99 MARK II <br />
        HEADPHONES{" "}
      </h2>
      <p className="banner-body">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.{" "}
      </p>
      {/* <Link to={product.slug} key={product.id} className="orange-btn">
        SEE PRODUCT
      </Link> */}
    </div>
  );
};
