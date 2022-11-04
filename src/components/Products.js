import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetDataQuery } from "../app/services/api";
import { useImageSize } from "../app/hooks";
import { Navbar } from "./Navbar";

import { Shopbar } from "./Shopbar";
import { Closer } from "./Closer";
import { Footer } from "./Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export const Products = () => {
  const [product, setProduct] = useState();
  const { data } = useGetDataQuery();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const imageSize = useImageSize();
  let navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    setProduct(data?.find((item) => item.slug === slug));
  }, [data, slug]);

  return product ? (
    <>
      <div key={product.id} className="product">
        <Navbar />
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>

        <div className="product-row">
          <div className="product-img-wrapper">
            <img
              className="product-img"
              src={product.image[imageSize]}
              alt={product.name}
            />
          </div>
          <div className="product-info">
            <div className="product-title">{product.name}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">${product.price}</div>

            <button onClick={handleAddToCart} className="orange-btn">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="product-row">
          <div className="product-features">
            <h3 className="product-subheader">FEATURES</h3>
            <div className="product-description">{product.features}</div>
          </div>
          <div>
            <h3 className="product-subheader">IN THE BOX</h3>
            {product.includedItems.map((item) => (
              <div key={item.id} className="product-stats">
                <span className="item-quantity">
                  {item.quantity}x {"  "}
                </span>
                {"  "}
                {item.item}
              </div>
            ))}
          </div>
        </div>

        <div className="gallery">
          <div className="gallery-imgs2">
            <img
              className="gallery-img2 gallery-img-margin"
              src={product.gallery.first[imageSize]}
              alt="gallery-img-2"
            />
            <img
              className="gallery-img2"
              src={product.gallery.second[imageSize]}
              alt="gallery-img-3"
            />
          </div>
          <img
            className="gallery-img"
            src={product.gallery.third[imageSize]}
            alt="gallery-img-1"
          />
        </div>

        <h3 className="product-subheader">YOU MAY ALSO LIKE</h3>
        <div className="product-suggestions">
          <div className="product-row">
            {product.others.map((item) => (
              <div key={item.id} className="product-row-card">
                <img
                  className="product-img product-row-img"
                  src={item.image[imageSize]}
                  alt={item.name}
                />
                <h2 className="product-name">{item.name}</h2>
                <div className="product-btn">
                  <Link
                    to={`/${item.category}/${item.slug}`}
                    className="orange-btn"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            ))}

            {/* <img src={product.image} alt={product.name} /> */}
          </div>
        </div>
        <Shopbar />
        <Closer />
        <Footer />
      </div>
    </>
  ) : null;
};
