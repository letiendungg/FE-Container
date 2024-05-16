import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Side from "./SiderBar";
import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="min-h-screen flex">
        <div>
          <Side />
        </div>
        <div className="w-full">
          <div className="w-full">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
