import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "../app/services/api";
import { Navbar } from "./Navbar";
import { Shopbar } from "./Shopbar";
// import { Closer } from "./Closer";
import { Footer } from "./Footer";
import closerImg from "../images/shared/mobile/image-best-gear.jpg";
import { useImageSize } from "../app/hooks";

export const Category = () => {
  const [products, setProducts] = useState();
  const { data } = useGetDataQuery();
  const { category } = useParams();
  const imageSize = useImageSize();

  useEffect(() => {
    setProducts(data?.filter((item) => item.category === category));
  }, [data, category]);

  return products?.length ? (
    <Fragment>
      <Navbar />
      <div className="category-title">{category}</div>
      {products.map((product) => (
        <div key={product.id}>
          <div className="category">
            <div className="category-img-wrapper">
              <img
                className="category-img"
                src={product.image[imageSize]}
                alt={product?.name}
              />
            </div>
            <div className="category-info">
              <h3 className="category-header">{product.name}</h3>
              <div className="category-description">{product.description}</div>
              <Link to={product.slug} key={product.id} className="orange-btn">
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
