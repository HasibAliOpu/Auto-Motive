import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import ResetModal from "../../Modal/ResetModal";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="bg-amber-300">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1527383418406-f85a3b146499?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Auto-Motive</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700">
                  Auto-Motive
                </h2>

                <p className="mt-3">Log in to access your account</p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  first-line:focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="font-bold text-gray-600  "
                      >
                        Password
                      </label>
                      <label
                        htmlFor="reset-modal"
                        className="text-sm text-gray-700 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </label>
                    </div>

                    <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 8,
                          message: "Must be 8 characters or longer",
                        },
                      })}
                    />

                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="mt-2">
                    <input
                      type="submit"
                      value="Sign In"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    />
                  </div>
                </form>
                <p className="mt-6 text- text-center ">
                  Don't have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Register Now!
                  </Link>
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b border-gray-800 lg:w-1/4"></span>

                  <span className="text-sm text-center font-mono  uppercase">
                    or login with Google
                  </span>

                  <span className="w-1/5 border-b border-gray-800 lg:w-1/4"></span>
                </div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="w-full flex items-center justify-center gap-2 mt-4 py-2 font-bold bg-white duration-200 transform rounded-lg hover:text-white  hover:bg-amber-300 hover:drop-shadow-2xl"
                >
                  <span>
                    <img src="https://i.ibb.co/SrwFy83/google.png" alt="" />
                  </span>
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResetModal></ResetModal>
    </div>
  );
};

export default Login;
