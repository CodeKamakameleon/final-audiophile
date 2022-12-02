import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "../app/services/api";
import { Navbar } from "./Navbar";
import { Shopbar } from "./Shopbar";
import { Footer } from "./Footer";
import { useImageSize } from "../app/hooks";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Modal } from "../features/modal/Modal";
import { Closer } from "./Closer";

export const Category = () => {
  const [products, setProducts] = useState();
  const { data } = useGetDataQuery();
  const { category } = useParams();
  const imageSize = useImageSize();

  useEffect(() => {
    setProducts(data?.filter((item) => item.category === category));
  }, [data, category]);

  const isOpen = useSelector((state) => state.modal.isOpen);

  return products?.length ? (
    <Fragment>
      <div className={clsx(`product ${isOpen ? "page-modal-open" : ""}`)}>
        <Navbar />
        <Modal />
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
                <div className="category-new">
                  {product.new ? "New Product" : ""}
                </div>
                <h3 className="category-header">{product.name}</h3>
                <div className="category-description">
                  {product.description}
                </div>
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

        <Closer />

        <Footer />
      </div>
    </Fragment>
  ) : null;
};
