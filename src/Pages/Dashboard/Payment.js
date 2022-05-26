import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L1a5GGjbzyJ737kuGlH4H8imUaSJz9SK0SQ8ypbQNk4CA4h0eOaC7p48RaL6KIsTU5pnSn5WFe5oUUauEsXSgNC00jdTitFQe"
  );

  const { id } = useParams();
  const url = `https://cryptic-ridge-95940.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const total = order.price * order.quantity;

  return (
    <div>
      <div className="card w-50 max-w-sm md:max-w-md bg-accent shadow-xl my-12 mx-auto text-cnter">
        <div className="card-body">
          <p className="text-sky-400 text-xl font-bold">
            Hello, [{order.name}]
          </p>
          <p className="text-lg font-serif">
            You Ordered item:- <span>( {order.partName} )</span>
          </p>
          <span className="flex font-bold f text-[#4f5d75] font-mono">
            <p>Per piece: {order.price}$</p>
            <p>You Order: {order.quantity} pieces</p>
          </span>
          <p className="text-primary text-xl">Total Bill: {total}$</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 md:max-w-md max-w-sm mx-auto shadow-xl bg-[#ffcdb2]">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
