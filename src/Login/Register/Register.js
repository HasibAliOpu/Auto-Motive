import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import CustomToast from "../../Modal/CustomToast";
import useToken from "../../Hooks/useToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [Toast] = CustomToast();
  const [eyeOpen, setEyeOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, UpError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);
  // onSubmit for form data
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  useEffect(() => {
    if (error || gError || UpError) {
      Toast.fire({
        icon: "error",
        title: error || gError || UpError,
      });
    }
  }, [Toast, error, gError, UpError]);

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="grid  lg:grid-cols-2 w-full  bg-sky-200 p-5 ">
      <div>
        <img
          src="https://i.ibb.co/mNtFTNZ/Sign-up-bro.png"
          className="1/4"
          alt="Album"
        />
      </div>
      <div>
        <h3 className="py-4 text-xl lg:text-4xl  text-[#29b1ff] text-center">
          Register Now!
        </h3>
        <div className="lg:px-20 pt-6 mx-6 mb-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="">
                <label className="block mb-2 pl-2 text-lg font-mono font-bold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-3 leading-tight text-gray-700 rounded-full shadow-xl appearance-none focus:outline-none focus:shadow-outline"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 pl-2 text-lg font-mono font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-3 leading-tight text-gray-700 rounded-full shadow-2xl appearance-none focus:outline-none focus:shadow-outline"
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
              <div className="relative">
                <label
                  className="block mb-2 pl-2 text-lg font-mono font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={eyeOpen ? "text" : "password"}
                  className="w-full px-3 py-3 leading-tight text-gray-700  rounded-full shadow-xl appearance-none focus:outline-none focus:shadow-outline"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <span
                  onClick={() => setEyeOpen(!eyeOpen)}
                  className="absolute top-11 right-5 text-info"
                >
                  {eyeOpen ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>

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
            </div>
            <div className="my-6 text-center">
              <input
                type="submit"
                value="Register"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              />
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className=" text-blue-500 align-baseline hover:text-blue-800 hover:underline"
              >
                Login!
              </Link>
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b border-gray-800 lg:w-1/4"></span>

              <span className="text-sm text-center font-mono  uppercase">
                or login with Google
              </span>

              <span className="w-1/5 border-b border-gray-800 lg:w-1/4"></span>
            </div>
          </form>
          <button
            onClick={() => signInWithGoogle()}
            className="w-full flex items-center justify-center gap-2 mt-4 py-2 font-bold bg-white duration-200 transform  rounded-full  hover:bg-[#ffd60a] shadow  hover:drop-shadow-2xl "
          >
            <span>
              <img src="https://i.ibb.co/SrwFy83/google.png" alt="" />
            </span>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
