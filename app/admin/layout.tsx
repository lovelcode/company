
import React from "react";
import Header from "../_components/panel/Header";
import Footer from "../_components/panel/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div><Header></Header></div>
      <div className="py-20">{children}</div>
      <div className="fixed w-full bottom-0"><Footer></Footer></div>
    </>
  );
};

export default layout;
