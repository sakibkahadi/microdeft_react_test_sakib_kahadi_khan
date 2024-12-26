"use client";

import { loginUser } from "@/utils/actions/loginUser";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [showError, setShowError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res.data.token) {
        localStorage.setItem("accessToken", res.data.token);
        // location.reload();/
        router.push("/");
      }
    } catch (err: any) {
      setShowError("Invalid email");
    }
  };

  return (
    <div className="my-10">
      <Toaster position="bottom-right" />
      <div className="p-1">
        <div className=" md:w-2/3 lg:w-2/3 xl:w-3/5 mx-auto border  border-dashed py-2 px-4 ">
          <h1 className="text-center text-4xl mb-5">
            Login<span className="text-teal-600"> Now</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-3 space-y-5">
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
              New here? Create an account{" "}
              <Link className="underline text-green-500" href="/register">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
