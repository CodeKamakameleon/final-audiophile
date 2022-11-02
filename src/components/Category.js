import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "../app/services/api";
import { Navbar } from "./Navbar";
import { Shopbar } from "./Shopbar";
// import { Closer } from "./Closer";
import { Footer } from "./Footer";
import closerImg from "../images/shared/mobile/image-best-gear.jpg";

export const Category = () => {
  const [products, setProducts] = useState();
  const { data } = useGetDataQuery();
  const { category } = useParams();

  useEffect(() => {
    setProducts(data?.filter((item) => item.category === category));
  }, [data, category]);

  return products?.length ? (
    <Fragment>
      <Navbar />

      {products.map((product) => (
        <div key={product.id}>
          <div className="category-title">{product.category}</div>
          <div className="category">
            <img
              className="category-img"
              src={product.image}
              alt={product?.name}
            />
            <div className="category-info">
              <h3 className="category-header">{product.name}</h3>
              <div className="category-description">{product.description}</div>
              <Link
                style={{ textDecoration: "none", display: "block" }}
                to={product.slug}
                key={product.id}
                className="orange-btn"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="category-shopbar">
        <Shopbar />
      </div>

      <div className="category-closer">
        <img className="category-closer-img" src={closerImg} alt="closer-img" />
        <div className="category-closer-text">
          <h3 className="category-closer-header">
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h3>
          <p className="category-closer-body">
            Located at the heart of New York City, Audiophile is the premiere
            store for high end headphones, earphones, speakers and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>

      <Footer />
    </Fragment>
  ) : null;
};
