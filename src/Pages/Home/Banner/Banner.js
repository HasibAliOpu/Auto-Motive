import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://i.ibb.co/Hty6917/pexels-orhun-r-zgar-z-10912797.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="text-4xl">Automotive Parts</p>
            <h1 className="mb-5 text-6xl font-bold uppercase">
              find parts that can perfect fit on your car
            </h1>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
