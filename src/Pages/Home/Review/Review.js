import React from "react";

const Review = ({ review }) => {
  const { name, img, reviews } = review;
  return (
    <div>
      <div className="card max-w-md shadow-xl">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{reviews}</p>
            <div class="rating rating-sm">
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
