import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../authentication/useLogin";
import Spinner from "./Spinner";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMoode";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function CompactSignInForm() {
  const { isDark, setIsDark } = useContext(DarkModeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { login, isPending } = useLogin();
  function onsubmit(data) {
    login(data, {
      onSettled: () => reset(),
    });
  }

  if (isPending) return <Spinner />;
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 p-4 md:mt-7 dark:bg-slate-900">
      <div
        className="absolute top-10 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? (
          <HiOutlineSun className="text-xl text-amber-500" />
        ) : (
          <HiOutlineMoon className="text-xl" />
        )}
      </div>
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
          <h2 className="mb-4 text-center text-2xl font-bold text-amber-600">
            Welcome Back
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaEnvelope className="h-4 w-4 text-amber-500" />
                </div>
                <input
                  type="email"
                  disabled={isPending}
                  autoComplete="off"
                  placeholder="Enter your email"
                  className="relative w-full border border-gray-200 px-12 py-3 text-sm text-gray-900 outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring focus:ring-amber-400 focus:ring-offset-2 dark:text-slate-300"
                  {...register("email", {
                    required: "This fiel is require",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="h-4 w-4 text-amber-500" />
                </div>
                <input
                  type="password"
                  autoComplete="off"
                  disabled={isPending}
                  placeholder="Enter your password"
                  className="relative w-full border border-gray-200 px-12 py-3 text-sm text-gray-900 outline-none placeholder:text-sm focus:ring focus:ring-amber-400 focus:ring-offset-2 dark:text-slate-300 dark:placeholder:text-slate-300"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 8,
                      message: "password must be at least 8 character long",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Must include uppercase, lowercase, number & special character",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="ml-2 text-gray-600 dark:text-slate-300">
                  Remember me
                </span>
              </label>
              <Link className="text-amber-600 hover:text-amber-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full cursor-pointer rounded-md bg-amber-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500 dark:bg-slate-800 dark:text-slate-300">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
              <button className="cursor-pointer rounded-md border border-gray-300 bg-white p-2 hover:bg-gray-50">
                <FaGoogle className="h-5 w-5 text-gray-600" />
              </button>
              <button className="cursor-pointer rounded-md border border-gray-300 bg-white p-2 hover:bg-gray-50">
                <FaGithub className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600 dark:text-slate-300">
            Don't have an account?{" "}
            <Link className="text-amber-600 hover:text-amber-500">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
