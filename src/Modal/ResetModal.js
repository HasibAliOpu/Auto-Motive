import React from "react";

const ResetModal = () => {
  return (
    <div>
      <input type="checkbox" id="reset-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="reset-modal"
            className="btn btn-sm btn-circle btn-primary text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-outline btn-primary ml-1">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
