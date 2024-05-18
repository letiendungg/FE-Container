import React from "react";
import Layout from "./Layout/Layout";
import Banner from "../Components/Home/Banner";
import Landing from "../Components/Home/Landing";
import OurCompany from "../Components/Home/OurCompany";
import OutLook from "../Components/Home/OutLook";
function Home() {
  return (
    <>
      <Layout>
        <div className="w-full">
          <Banner />
          <Landing />
          <div className="mx-8 border-b-2 my-8 border-slate-400"></div>
          <OutLook />
          <div className="mx-8 border-b-2 my-8 border-slate-400"></div>
          <OurCompany />
        </div>
      </Layout>
    </>
  );
}

export default Home;
