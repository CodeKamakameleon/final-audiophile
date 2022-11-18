import headphonesImg from "../images/shared/desktop/image-headphones.png";
import speakerImg from "../images/shared/desktop/image-speakers.png";
import earphonesImg from "../images/shared/desktop/image-earphones.png";
import { Link } from "react-router-dom";
// import { useGetDataQuery } from "../app/services/api";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

export const Shopbar = () => {
  // const { data: products } = useGetDataQuery();
  // console.log(products);
  // const [products, setProducts] = useState();
  // const { data } = useGetDataQuery();
  // const { category } = useParams();
  // useEffect(() => {
  //   setProducts(data?.filter((item) => item.category === category));
  // }, [data, category]);

  // return products?.length ? (
  //   <>
  //     {products.map((product) => (

  return (
    <div className="shopbar">
      <div className="card">
        <img src={headphonesImg} alt="xx-99-mark-1" />
        <p className="card-header">HEADPHONES</p>
        <Link to="/headphones" className="card-btn">
          SHOP <span>&gt;</span>{" "}
        </Link>
      </div>
      <div className="card">
        <img src={speakerImg} alt="speaker-img" />
        <p className="card-header">SPEAKERS</p>
        <Link to="/speakers" className="card-btn">
          SHOP <span>&gt;</span>
        </Link>
      </div>
      <div className="card">
        <img src={earphonesImg} alt="earphones-img" />
        <p className="card-header">EARPHONES</p>
        <Link to="/earphones" className="card-btn">
          SHOP <span>&gt;</span>{" "}
        </Link>
      </div>
    </div>
  );
  //  )}
  // </>
  // ) : null;
};
