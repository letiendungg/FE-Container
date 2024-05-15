import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function SimpleLayOut({ children }) {
  return (
    <div>
      <Header />
      <div className=" bg-main h-14"></div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default SimpleLayOut;
