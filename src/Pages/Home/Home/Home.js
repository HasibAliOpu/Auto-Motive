import React from "react";
import Banner from "../Banner/Banner";
import BasicInfo from "../BasicInfo/BasicInfo";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import ClientReview from "../ClientReview/ClientReview";
import Discount from "../Discount/Discount";
import Parts from "../Parts/Parts";

const Home = () => {
  return (
    <div>
      <Banner />
      <BasicInfo />
      <Parts />
      <BusinessSummary />
      <Discount />
      <ClientReview />
    </div>
  );
};

export default Home;
