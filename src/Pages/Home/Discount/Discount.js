import React from "react";

const Discount = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-10 my-10 text-white">
      <div className="flex justify-between gap-5  py-3 px-10 lg:p-12 bg-warning ">
        <div className="font-mono lg:text-2xl">
          <p className="uppercase font-bold">big sale countdown</p>
          <h3 className="font-bold lg:text-6xl uppercase">hurry up!</h3>
          <p>Stock Limited</p>
        </div>
        <div className="text-black flex items-center text-6xl">
          <h3 className="lg:text-8xl">75</h3>
          <span>
            <h5 className="text-4xl font-bold">%</h5>
            <p className="uppercase font-bold text-xl">off</p>
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center bg-black">
        <div className="border-4 border-warning p-3 my-2  lg:p-7 font-bold font-mono text-center">
          <p className="uppercase">
            original car parts <span className="text-yellow-500">2022</span>
          </p>
          <h2 className="lg:text-4xl">Discover new arrivals</h2>
          <p className="text-yellow-500 font-serif text-sm">
            2000+ spare parts!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discount;
