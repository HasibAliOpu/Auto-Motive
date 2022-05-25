import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../Loading/Loading";

const AddProduct = () => {
  const [process, setProcess] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageSecretKey = "0313811f6b27cbd96509e43e7b9addf6";
  const formData = new FormData();

  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];
    formData.append("image", image);
    setProcess(true);
    const url = `https://api.imgbb.com/1/upload?key=${imageSecretKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            img: img,
            price: data.price,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            description: data.description,
          };
          console.log(product);
        }
      });
  };
  // if (process) {
  //   return <Loading />;
  // }
  return (
    <div className="w-1/2 mx-auto mb-10">
      <h1 className="text-center py-4 text-xl text-primary font-bold">
        Add A Product !
      </h1>
      <div className="border rounded-xl p-5 bg-teal-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium "
            >
              Name
            </label>
            <input
              type="text"
              className="bg-gray-50  text-sm rounded-lg  block w-full p-2.5 shadow-md outline-teal-400 "
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium "
            >
              Price
            </label>
            <input
              type="number"
              className="bg-gray-50  text-sm rounded-lg  outline-teal-400 block w-full p-2.5 shadow-md "
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium "
            >
              Available Quantity
            </label>
            <input
              type="number"
              className="bg-gray-50  text-sm rounded-lg  outline-teal-400 block w-full p-2.5 shadow-md "
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Give some Quantity",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium "
            >
              Minimum Quantity
            </label>
            <input
              type="number"
              className="bg-gray-50  text-sm rounded-lg  outline-teal-400 block w-full p-2.5 shadow-md "
              {...register("minimumQuantity", {
                required: {
                  value: true,
                  message: "Give minimum Quantity of product",
                },
              })}
            />
            <label className="label">
              {errors.minimumQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimumQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Upload photo
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

          <div className="">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Description
            </label>
            <textarea
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md  outline-teal-400"
              placeholder="Write a product description..."
              {...register("description", {
                required: {
                  value: true,
                  message: "Review is Required",
                },
                minLength: {
                  value: 50,
                  message: "Give Description 50 characters or longer",
                },
              })}
            />

            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
              {errors.description?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <input
            type="submit"
            value="add"
            className="btn btn- btn-info text-white  w-full my-3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
