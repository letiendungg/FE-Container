import React from "react";
import Layout from "./Layout/Layout";
import Banner from "../Components/Banner";
import Landing from "../Components/Landing";
function Home() {
  return (
    <>
      <Layout>
        <div className="w-full">
          <Banner />
          <Landing />
        </div>
      </Layout>
    </>
  );
}

export default Home;
