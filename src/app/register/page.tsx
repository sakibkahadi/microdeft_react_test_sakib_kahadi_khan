/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { registerUser } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [showError, setShowError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();
  const router = useRouter();
  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
      const res = await registerUser(data);
      if (res.status) {
        setShowError("");
        toast.success(`${res.status_message}`);
      }
    } catch (err: any) {
      setShowError("The email has already been taken.");
    }
  };

  return (
    <div className="my-10">
      <Toaster position="bottom-right" />
      <div className="">
        <div className=" md:w-2/3 lg:w-1/3 mx-auto border border-blue-500 py-2 px-4 ">
          <h1 className="text-center text-4xl mb-5">
            Register <span className="text-accent">Now</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-3 space-y-5">
            {/* name*/}
            <div className="form-control">
              <label className=" custom-label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="User Name"
                className=" custom-input"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* email */}
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-black">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="custom-input"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* password */}
            <div className="form-control">
              <label className="custom-label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="custom-input"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            {showError && <p className="text-sm text-red-700">{showError}</p>}

            <div className="form-control mt-6">
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Register
              </button>
            </div>

            <p className="text-center">
              Already have an account?{" "}
              <Link className="underline text-green-500" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
