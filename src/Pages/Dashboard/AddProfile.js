import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import CustomToast from "../../Modal/CustomToast";

const AddProfile = () => {
  const [Toast] = CustomToast();
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const profileInfo = {
      name: user.displayName,
      email: user.email,
      education: data.education,
      district: data.district,
      city: data.city,
      linkedin: data.linkedin,
      github: data.github,
      phone: data.phone,
    };
    const { data: response } = await axios.post(
      "http://localhost:5000/myProfile",
      profileInfo
    );
    if (!response.insertedId) {
      Toast.fire({
        icon: "error",
        title: "Something was Wrong! Please try again",
      });
    }
    Toast.fire({
      icon: "success",
      title: "Your Profile was added",
    });
    reset();
  };
  return (
    <div className="w-full lg:w-1/2  my-10 mx-auto">
      <div className=" bg-sky-200 p-5 rounded-lg shadow-2xl">
        <h3 className="py-4 text-4xl font-serif text-blue-500 text-center">
          Add Your Profile!!
        </h3>
        <div className="px-8 pt-6 pb-8 mx-6 mb-4 bg-white rounded shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={user?.displayName}
                disabled
                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
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
                value={user?.email}
                disabled
                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Education
              </label>
              <textarea
                type="text"
                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                {...register("education", {
                  required: {
                    value: true,
                    message: "Education is Required",
                  },
                })}
              />
              <label className="label">
                {errors.education?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
            </div>
            <div className="md:flex">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  District
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("district", {
                    required: {
                      value: true,
                      message: "District is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.district?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.district.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("city", {
                    required: {
                      value: true,
                      message: "City is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.city?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.city.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="md:flex">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Linkedin <small>(optional)</small>
                </label>

                <input
                  type="text"
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("linkedin")}
                />
              </div>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Github <small>(optional)</small>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("github")}
                />
              </div>
            </div>
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Phone
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mb-6 text-center">
              <input
                type="submit"
                value="Submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
