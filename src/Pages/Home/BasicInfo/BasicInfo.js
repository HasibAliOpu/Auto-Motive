import React from "react";

const BasicInfo = () => {
  return (
    <div className="grid grid-cols-4 m-10 p-5 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="w-20">
          <img
            src="https://i.ibb.co/7JyBZW6/delivery-truck-1.png"
            alt="truck"
          />
        </div>
        <div>
          <h3 className="uppercase font-mono text-xl font-bold">
            free delivery
          </h3>
          <p className="text-xs">Worldwide from $75</p>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="w-20">
          <img src="https://i.ibb.co/NmCx1hg/reload-1.png" alt="return" />
        </div>
        <div>
          <h3 className="uppercase font-mono text-xl font-bold">
            easy returns
          </h3>
          <p className="text-xs">365 days for free returns</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-20">
          <img src="https://i.ibb.co/pQr3LWH/wallet-1.png" alt="wallet" />
        </div>
        <div>
          <h3 className="uppercase font-mono text-xl font-bold">
            comfort payments
          </h3>
          <p className="text-xs">Credit Cards Available</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-20">
          <img src="https://i.ibb.co/HD5dsny/gift-1.png" alt="gift" />
        </div>
        <div>
          <h3 className="uppercase font-mono text-xl font-bold">free gifts</h3>
          <p className="text-xs">Get gifts and discounts</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
