import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../app/services/api";

export const Products = () => {
  const [product, setProduct] = useState();
  const { data } = useGetDataQuery();
  const { slug } = useParams();

  useEffect(() => {
    setProduct(data?.find((item) => item.slug === slug));
  }, [data, slug]);

  return product ? <>{product.name}</> : null;
};
