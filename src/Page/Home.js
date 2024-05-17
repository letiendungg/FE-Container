import React from "react";
import Layout from "./Layout/Layout";
import Banner from "../Components/Banner";
import Landing from "../Components/Landing";
import OurCompany from "../Components/OurCompany";
function Home() {
  return (
    <>
      <Layout>
        <div className="w-full">
          <Banner />
          <Landing />
          <div className="mx-8 border-b-2 my-8 border-slate-400"></div>
          <OurCompany />
        </div>
      </Layout>
    </>
  );
}

export default Home;
