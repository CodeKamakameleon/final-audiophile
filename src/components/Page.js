// import { Banner } from "./Banner";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
// import { useEffect, useState } from "react";
// import { useGetDataQuery } from "../app/services/api";
import { Shopbar } from "./Shopbar";
import { Featured } from "./Featured";
import { Closer } from "./Closer";
import { Footer } from "./Footer";
import { Modal } from "../features/modal/Modal";
// import clsx from "clsx";
// import { useSelector } from "react-redux";

export const Page = () => {
  // const modalIsOpen = useSelector((state) => state.modal.modalIsOpen);

  return (
    <div
    //  className={clsx(`page ${modalIsOpen ? "page-modal-open" : ""}`)}
    >
      <Navbar />
      <Modal />
      <Banner />
      <Shopbar />
      <Featured />
      <Closer />
      <Footer />
    </div>
  );
};
