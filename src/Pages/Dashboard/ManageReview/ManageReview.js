import React from "react";
import { useQuery } from "react-query";
import Review from "./Review";

const ManageReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("http://localhost:5000/review").then((data) => data.json())
  );

  return (
    <div>
      <h1 className="text-2xl pt-3  text-center">Manage Reviews!</h1>
      <div className="grid grid-cols-3 gap-5 m-5">
        {reviews?.map((MgReview) => (
          <Review key={MgReview._id} MgReview={MgReview} />
        ))}
      </div>
    </div>
  );
};

export default ManageReview;
