import React, { useState } from "react";

const AddReview = () => {
  const [rating, setRating] = useState(1);
  console.log(parseInt(rating));
  return (
    <div>
      <h1 className="text-center py-4 text-xl text-primary font-bold">
        Add A Review !
      </h1>
      <div className="border rounded p-5 bg-teal-300">
        <form>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium "
            >
              Name
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md "
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Upload your photo
            </label>
            <input
              className="block w-full text-sm py-2 pr-20 pl-1 text-gray-900 shadow-md rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
              type="file"
            />
          </div>
          <div
            className="rating my-4"
            onChange={(e) => setRating(e.target.value)}
          >
            <input
              value="1"
              type="radio"
              name="rating-2"
              defaultChecked
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              value="2"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              value="3"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              value="4"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              value="5"
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your review
            </label>
            <textarea
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a review..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="POST"
            className="btn btn- btn-info text-white  w-full my-3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
