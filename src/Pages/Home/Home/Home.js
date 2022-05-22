import React from "react";
import Banner from "../Banner/Banner";
import BasicInfo from "../BasicInfo/BasicInfo";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import ClientReview from "../ClientReview/ClientReview";
import Discount from "../Discount/Discount";

const Home = () => {
  return (
    <div>
      <Banner />
      <BasicInfo />
      <ClientReview />
      <BusinessSummary />
      <Discount />
    </div>
  );
};

export default Home;
