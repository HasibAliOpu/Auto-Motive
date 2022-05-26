import React from "react";

import { useForm } from "react-hook-form";
import CustomToast from "../../Modal/CustomToast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [Toast] = CustomToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery("profile", () =>
    fetch(`https://cryptic-ridge-95940.herokuapp.com/myProfile/${id}`).then(
      (res) => res.json()
    )
  );

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

    fetch(`https://cryptic-ridge-95940.herokuapp.com/myProfile/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ profileInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          Toast.fire({
            icon: "error",
            title: data.error,
          });
        } else {
          Toast.fire({
            icon: "success",
            title: data.message,
          });
          refetch();
          reset();
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="max-w-sm lg:w-1/2  my-10 mx-auto">
        <div className=" bg-success p-5 rounded-lg shadow-2xl">
          <h3 className="py-4 text-4xl font-serif text-white text-center">
            Update Your Profile!!
          </h3>
          <div className="px-8 pt-6 pb-8 mx-6 mb-4 bg-white rounded shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={profile.name}
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  disabled
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
                  defaultValue={profile.email}
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  disabled
                />
              </div>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Education
                </label>
                <textarea
                  type="text"
                  defaultValue={profile.education}
                  className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("education")}
                />
              </div>
              <div className="md:flex">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    District
                  </label>
                  <input
                    type="text"
                    defaultValue={profile.district}
                    className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("district")}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue={profile.city}
                    className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("city")}
                  />
                </div>
              </div>
              <div className="md:flex">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Linkedin
                  </label>

                  <input
                    type="text"
                    defaultValue={profile.linkedin}
                    className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("linkedin")}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Github
                  </label>
                  <input
                    type="text"
                    defaultValue={profile.github}
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
                  defaultValue={profile.phone}
                  className="w-full mb-5 px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("phone")}
                />
              </div>
              <div className="mb-6 text-center">
                <input
                  type="submit"
                  value="Update"
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
