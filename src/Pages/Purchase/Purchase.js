import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomToast from "../../Modal/CustomToast";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [Toast] = CustomToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: part,
    isLoading,
    refetch,
  } = useQuery(["part", id], () =>
    fetch(`http://localhost:5000/parts/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const onSubmit = async (data) => {
    let quantity = data.quantity;
    if (quantity > part?.availableQuantity) {
      return Toast.fire({
        icon: "error",
        title: "Sorry! please order lower or equal of available pieces",
      });
    }
    quantity = part?.availableQuantity - quantity;
    const newQuantity = { availableQuantity: quantity };
    await axios.put(`http://localhost:5000/parts/${id}`, newQuantity);
    const order = {
      partId: part._id,
      partName: part.name,
      price: part.price,
      name: user.displayName,
      email: user.email,
      address: data.address,
      phone: data.phone,
      quantity: data.quantity,
    };
    const { data: orderRes } = await axios.post(
      `http://localhost:5000/order`,
      order
    );

    if (orderRes.insertedId) {
      Toast.fire({
        icon: "success",
        title: "Order is booked, please go dashboard and pay it!",
      });

      reset();
      refetch();
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={part?.img}
            className="w-1/2 mx-auto my-5 rounded-lg shadow-2xl"
            alt=""
          />
          <h1 className="text-2xl text-center font-bold">{part?.name}</h1>
          <h3 className="text-3xl font-bold font-mono text-center pt-4">
            Price: <span className="text-warning">{part?.price}$</span>
          </h3>
          <p className="py-6">{part?.description}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="text-center">
                <h1 className="text-xl text-blue-400 font-bold">
                  Available Parts: {part?.availableQuantity} pieces
                </h1>
                <h1 className="text-md text-orange-400 font-bold">
                  minimum order : {part?.minimumQuantity} pieces
                </h1>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={user?.displayName}
                  disabled
                  className="input input-bordered border-primary mb-1"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="input input-bordered border-primary mb-1"
                />
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
                  placeholder="Parts Quantity"
                  // value=
                  defaultValue={part.minimumQuantity}
                  className="input input-bordered border-primary"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is Required",
                    },
                    min: {
                      value: part.minimumQuantity,
                      message: `Please Order minimum ${part.minimumQuantity} pieces`,
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
                <button className="btn btn-primary text-white">
                  purchase now !
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
