import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <section className="text-center">
        <div className="my-5">
          <h1 className="text-xl">
            Hello! My name is Hasib ali Opu. and i'm junior MERN-Stock Developer
          </h1>
          <h3 className="text-lg py-2">
            I am skilled in HTML, CSS, Bootstrap, Tailwind(mostly use),
            JavaScript, React JS, Node JS, Express JS, Mongo DB, and Firebase
          </h3>
          <p>Recently i start my study on Computer Engineering field</p>
          <p>[wwwhasib4@gmail.com] For Contact you can mail on this Email</p>
        </div>
        <div>
          <h1 className="text-2xl my-5">
            my top 3 Best Project link and some Screenshot!
          </h1>
          <div className="mb-5">
            <div>
              <a
                href="https://tech-world-c48c2.web.app/"
                target="_blank"
                rel="noreferrer noopener"
                class="btn btn-active btn-link"
              >
                Tech World!
              </a>
              <span className="flex justify-center gap-5">
                <img
                  src="https://i.ibb.co/4Twjh6H/Screenshot-102.png"
                  alt=""
                  className="w-1/4"
                />
                <img
                  src="https://i.ibb.co/QMBQd5X/Screenshot-103.png"
                  alt=""
                  className="w-1/4"
                />
                <img
                  src="https://i.ibb.co/GJ1RdZG/Screenshot-109.png"
                  alt=""
                  className="w-1/4"
                />
              </span>
            </div>
            <div>
              <a
                href="https://dr-physiologists.web.app/"
                target="_blank"
                rel="noreferrer noopener"
                class="btn btn-active btn-link"
              >
                Dr-Physiologists
              </a>
              <span className="flex justify-center gap-5">
                <img
                  src="https://i.ibb.co/56Wrbyd/Screenshot-105.png"
                  alt=""
                  className="w-1/4"
                />
                <img
                  src="https://i.ibb.co/xmvR14M/Screenshot-106.png"
                  alt=""
                  className="w-1/4"
                />
                <img
                  src="https://i.ibb.co/2W3CpCW/Screenshot-107.png"
                  alt=""
                  className="w-1/4"
                />
              </span>
            </div>
            <div>
              <a
                href="https://jbl-charge-4.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                class="btn btn-active btn-link"
              >
                JBL-Charge-4
              </a>
              <span className="flex justify-center gap-5">
                <img
                  src="https://i.ibb.co/6PvS74y/Screenshot-110.png"
                  alt=""
                  className="w-1/4"
                />
                <img
                  src="https://i.ibb.co/tQBRs28/Screenshot-111.png"
                  alt=""
                  className="w-1/4"
                />
                <img
                  src="https://i.ibb.co/68yJX2q/Screenshot-112.png"
                  alt=""
                  className="w-1/4"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
