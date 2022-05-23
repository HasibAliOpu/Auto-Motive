import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";

const ResetModal = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  if (sending) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <input type="checkbox" id="reset-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="reset-modal"
            className="btn btn-sm btn-circle btn-primary text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-outline btn-primary ml-1">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
