import React from "react";
import Review from "../Review/Review";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      name: "winson Herry",
      address: "California",
      img: "https://api.lorem.space/image/face?hash=88560",
      reviews:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum saepe nesciunt! Eaque expedita deleniti odio iusto, obcaecati magni ipsam repudiandae placeat nam earum eum nobis, impedit neque iure omnis?",
    },
    {
      id: 2,
      name: "Eva Wilson",
      address: "8732 Fairview St",
      img: "https://api.lorem.space/image/face?hash=26448",
      reviews:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum saepe nesciunt! Eaque expedita deleniti odio iusto, obcaecati magni ipsam repudiandae placeat nam earum eum nobis, impedit neque iure omnis?",
    },
    {
      id: 3,
      name: "Melinda Kelly",
      address: "4179 W Sherman Dr",
      img: "https://api.lorem.space/image/face?hash=28212",
      reviews:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum saepe nesciunt! Eaque expedita deleniti odio iusto, obcaecati magni ipsam repudiandae placeat nam earum eum nobis, impedit neque iure omnis?",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl text-accent font-mono">
        What People Think About us!
      </h1>
      <div className="grid grid-cols-3 gap-5 my-10 mx-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
