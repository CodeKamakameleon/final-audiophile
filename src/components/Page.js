// import { Banner } from "./Banner";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { useGetDataQuery } from "../app/services/api";
import { Shopbar } from "./Shopbar";
import { Featured } from "./Featured";

export const Page = () => {
  const { data: data } = useGetDataQuery();
  return (
    <div>
      <Navbar />
      <Banner />
      <Shopbar />
      <Featured />
    </div>
  );
};
