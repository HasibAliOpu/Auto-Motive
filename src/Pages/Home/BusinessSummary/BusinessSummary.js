import React from "react";

const BusinessSummary = () => {
  return (
    <div className="md:flex justify-around text-center font-mono shadow-2xl shadow-rose-200 my-12 mx-5 p-5 rounded-xl">
      <div className="mb-4 lg:mb-0">
        <img
          className="w-20 mx-auto"
          src="https://i.ibb.co/VgjGHRz/red-flag.png"
          alt="flag"
        />
        <h3 className="text-4xl text-error font-bold pt-2">53+</h3>
        <p className="font-bold text-secondary ">Countries</p>
      </div>
      <div className="mb-4 lg:mb-0">
        <img
          className="w-20 mx-auto"
          src="https://i.ibb.co/JznYpK4/laptop-computer.png"
          alt=""
        />
        <h3 className="text-4xl text-error font-bold pt-2">650+</h3>
        <p className="font-bold text-secondary ">Complete Projects</p>
      </div>
      <div className="mb-4 lg:mb-0">
        <img
          className="w-20 mx-auto"
          src="https://i.ibb.co/F0pPrKf/people.png"
          alt=""
        />
        <h3 className="text-4xl text-error font-bold  pt-2">235+</h3>
        <p className="font-bold text-secondary ">Happy Clients</p>
      </div>
      <div className="mb-4 lg:mb-0">
        <img
          className="w-20 mx-auto"
          src="https://i.ibb.co/F4hgjc8/like.png"
          alt=""
        />
        <h3 className="text-4xl text-error font-bold  pt-2">185+</h3>
        <p className="font-bold text-secondary ">Feedbacks</p>
      </div>
    </div>
  );
};

export default BusinessSummary;
