import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="w-full lg:w-1/2 my-10 mx-auto bg-orange-300 p-5 rounded-lg shadow-2xl">
      <h3 class="py-4 text-4xl text-center">Create an Account!</h3>
      <div class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-xl">
        <form>
          <div class="mb-4">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label class="block mb-2 text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                class="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              class="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
            />
          </div>
          <div class="mb-4  ">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password"
              >
                Password
              </label>
              <input
                class="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
              />
            </div>
          </div>
          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register Account
            </button>
          </div>
          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <span class="text-sm text-center font-mono  uppercase">
              or login with Google
            </span>

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
        </form>
        <button class="w-full flex items-center justify-center gap-2 mt-4 py-2 font-bold transition-colors duration-200 transform border rounded-lg  hover:bg-warning ">
          <span>
            <img src="https://i.ibb.co/SrwFy83/google.png" alt="" />
          </span>
          <span>Sign in with Google</span>
        </button>
        <p class="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            class=" text-blue-500 align-baseline hover:text-blue-800"
          >
            Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
