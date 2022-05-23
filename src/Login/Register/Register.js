import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, UpError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // onSubmit for form data
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    alert("Updated profile");
  };

  if (loading || gLoading || updating) {
    return <Loading />;
  }
  if (error || gError || UpError) {
    console.log(error, gError, UpError);
  }
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="w-full lg:w-1/2 my-10 mx-auto bg-sky-200 p-5 rounded-lg shadow-2xl">
      <h3 className="py-4 text-4xl font-serif text-blue-500 text-center">
        Create an Account!
      </h3>
      <div className="px-8 pt-6 pb-8 mx-6 mb-4 bg-white rounded shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
          </div>
          <div className="mb-6 text-center">
            <input
              type="submit"
              value="Register Account"
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
          className="w-full flex items-center justify-center gap-2 mt-4 py-2 font-bold transition-colors duration-200 transform border rounded-lg  hover:bg-warning shadow  hover:drop-shadow-2xl "
        >
          <span>
            <img src="https://i.ibb.co/SrwFy83/google.png" alt="" />
          </span>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
