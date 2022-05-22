import React from "react";
import Banner from "../Banner/Banner";
import BasicInfo from "../BasicInfo/BasicInfo";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Discount from "../Discount/Discount";

const Home = () => {
  return (
    <div>
      <Banner />
      <BasicInfo />
      <BusinessSummary />
      <Discount />
    </div>
  );
};

export default Home;
