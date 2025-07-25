// Components/ui/SignUpForm.tsx

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import supabase from "../../service/supabase";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setIsLoading(true);

    const { email, password } = data;
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      alert(error.message);
    } else {
      toast.success("Account Created successfully");
      navigate("/login");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
        <h2 className="mb-4 text-center text-2xl font-bold text-amber-600">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-700 dark:text-slate-300">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-amber-500" />
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm outline-none dark:text-slate-300"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700 dark:text-slate-300">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-amber-500" />
              <input
                type="password"
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm outline-none dark:text-slate-300"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-amber-600 py-2 text-white hover:bg-amber-700"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-slate-300">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600 hover:text-amber-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
