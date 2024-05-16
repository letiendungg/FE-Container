import React from "react";
import Layout from "./Layout/Layout";
import Banner from "../Components/Banner";
function Home() {
  return (
    <>
      <Layout>
        <div className="w-full">
          <Banner />
        </div>
      </Layout>
    </>
  );
}

export default Home;
