import React from "react";

const Review = ({ MgReview }) => {
  console.log(MgReview);
  const { image, name, review, rating } = MgReview;
  return (
    <div className="card max-w-md shadow-xl">
      <div className="card-body">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{review}</p>
          <p className="flex items-center gap-1">
            Rating: {rating}
            <span className="rating rating-sm">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </span>
          </p>
        </div>
        <div class="flex justify-center items-center">
          <button class="btn text-white border-none  bg-red-600">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
