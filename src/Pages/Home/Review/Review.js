import React from "react";

const Review = ({ reviews }) => {
  const { name, image, review, rating } = reviews;
  return (
    <div>
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
                  class="mask mask-star-2 bg-orange-400"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
