import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const OrderPart = () => {
  const [part, setPart] = useState();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/parts/${id}`);
      setPart(data);
    })();
  }, [id]);

  const onSubmit = (data) => {
    if (data?.quantity > part?.availableQuantity) {
      return alert("out of stock");
    }
    console.log(data);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={part?.img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <h1 className="text-2xl font-bold">{part?.name}</h1>
          <p className="py-6">{part?.description}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="text-center">
                <h1 className="text-xl text-blue-400 font-bold">
                  Available-Quantity: {part?.availableQuantity} pieces
                </h1>
                <h1 className="text-md text-orange-400 font-bold">
                  minimum order Quantity: {part?.minimumQuantity} pieces
                </h1>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered border-primary"
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
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-primary"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered border-primary"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum 6 Character",
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                  {errors.address?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered border-primary"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Number is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum 6 Character",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  type="number"
                  placeholder="Part Quantity"
                  className="input input-bordered border-primary"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is Required",
                    },
                    min: {
                      value: 50,
                      message: "Please Order minimum 50 pieces",
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "min" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">order now!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPart;
