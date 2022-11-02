import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "../app/services/api";
import { Navbar } from "./Navbar";

export const Category = () => {
  const [products, setProducts] = useState();
  const { data } = useGetDataQuery();
  const { category } = useParams();

  useEffect(() => {
    setProducts(data?.filter((item) => item.category === category));
  }, [data, category]);

  return products?.length ? (
    <>
      {products.map((product) => (
        // text-decoration: none;

        <div className="category">
          <img
            className="category-img"
            src={product.image}
            alt={product?.name}
          />
          <div className="category-info">
            <h3>{product.name}</h3>
            <div>{product.description}</div>
            <Link
              style={{ textDecoration: "none", display: "block" }}
              to={product.slug}
              key={product.id}
              className="product-link"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </>
  ) : null;
};
