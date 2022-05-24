import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
import axios from "axios";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [rating, setRating] = useState(1);
  const imageSecretKey = "0313811f6b27cbd96509e43e7b9addf6";
  const formData = new FormData();

  const onSubmit = (data) => {
    const image = data.image[0];
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageSecretKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const review = {
            name: user.displayName,
            image: img,
            rating: rating,
            review: data.review,
          };
          (async () => {
            const { data: imgRes } = await axios.post(
              "http://localhost:5000/review",
              review
            );
            console.log(imgRes);
          })();
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-center py-4 text-xl text-primary font-bold">
        Add A Review !
      </h1>
      <div className="border rounded p-5 bg-teal-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium "
            >
              Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              className="bg-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md "
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Upload your photo
            </label>
            <input
              type="file"
              className="block w-full text-sm py-2 pr-20 pl-1 text-gray-900 shadow-md rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          <div
            className="rating my-4"
            onClick={(e) => setRating(e.target.value)}
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
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is Required",
                },
                minLength: {
                  value: 50,
                  message: "Give Review 50 characters or longer",
                },
              })}
            />

            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
              {errors.review?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
            </label>
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
