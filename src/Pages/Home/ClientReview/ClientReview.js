import React from "react";
import { useQuery } from "react-query";
import Review from "../Review/Review";

const ClientReview = () => {
  const { data: reviews } = useQuery("reviews", () =>
    fetch("https://cryptic-ridge-95940.herokuapp.com/review").then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <h1 className="text-center text-4xl text-info font-mono">
        What People Think About us!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-8">
        {reviews?.slice(0, 6).map((review) => (
          <Review key={review._id} reviews={review} />
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
