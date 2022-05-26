import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CustomToast from "../../Modal/CustomToast";
import Loading from "../../Loading/Loading";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  const [Toast] = CustomToast();

  const { _id, price, email, name } = order;

  useEffect(() => {
    fetch("https://cryptic-ridge-95940.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error?.message) {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    }
    // // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    setProcessing(true);
    if (intentError) {
      setProcessing(false);
      Toast.fire({
        icon: "error",
        title: intentError.message,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "congrats! Your payment is completed",
      });
      // store payment on database

      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://cryptic-ridge-95940.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ payment }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
        });
    }
  };
  if (processing) {
    return <Loading />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#edf6f9",
                },
              },
              invalid: {
                color: "#e63946",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
