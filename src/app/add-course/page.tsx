/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export type TCourses = {
  title: string;
  description: string;
  badge_text: string;
  badge_color: string;
  instructor_name: string;
};

const AddCoursePage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    <h1 className="text-4xl text-center text-red-500">Loading..........</h1>;
  }
  const token = session?.user?.accessToken;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCourses>();

  const onSubmit = async (data: TCourses) => {
    try {
      const res = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        toast.error(`Failed to add ${data.title} `);
      }
      const resData = await res.json();
      if (resData.status) {
        toast.success(`${resData.status_message}`);
      }
    } catch (err: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="my-10">
      <Toaster position="bottom-right" />
      <div className="p-1">
        <div className="  md:w-2/3 lg:w-2/3 xl:w-3/5 mx-auto border  border-dashed py-2 px-4">
          <h1 className="text-center text-4xl mb-5">
            Course<span className="text-cyan-800"> Form</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-3 space-y-5">
            {/* title*/}
            <div className="form-control">
              <label className=" custom-label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: "title is required" })}
                placeholder="Course Title"
                className=" custom-input"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>
            {/* Instructor name*/}
            <div className="form-control">
              <label className=" custom-label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                {...register("instructor_name", {
                  required: "instructor name is required",
                })}
                placeholder="Instructor Name"
                className=" custom-input"
              />
              {errors.instructor_name && (
                <span className="text-red-500 text-sm">
                  {errors.instructor_name.message}
                </span>
              )}
            </div>
            {/* badge and text */}
            <div className=" flex flex-wrap gap-5 items-start">
              {/* badge color*/}
              <div className="form-control w-fit ">
                <label className=" custom-label">
                  <span className="label-text">Badge Color</span>
                </label>
                <div className="cp_wrapper">
                  <input
                    type="color"
                    {...register("badge_color", {
                      required: "badge color is required",
                    })}
                    placeholder="Course Title"
                  />
                </div>

                {errors.badge_color && (
                  <span className="text-red-500 text-sm">
                    {errors.badge_color.message}
                  </span>
                )}
              </div>
              {/* Badge text*/}
              <div className="form-control flex-grow">
                <label className=" custom-label">
                  <span className="label-text">Badge Text</span>
                </label>
                <input
                  type="text"
                  {...register("badge_text", {
                    required: "badge text is required",
                  })}
                  placeholder="Badge Text"
                  className=" custom-input"
                />
                {errors.badge_text && (
                  <span className="text-red-500 text-sm">
                    {errors.badge_text.message}
                  </span>
                )}
              </div>
            </div>
            {/* description*/}
            <div className="form-control">
              <label className="custom-label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Course Description"
                className="custom-input h-24" // You can adjust the height as needed
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
