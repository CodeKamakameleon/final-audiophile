// import { Banner } from "./Banner";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";

export const Page = () => {
  const [view, setView] = useState("products");
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};
