import { FaPhone } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineUser } from "react-icons/hi";
import BackButton from "../ui/BackButton";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

function UserDeliverInfo({ onBack, setStep }) {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("deliveryInfo")) || {
      name: "",
      phone_number: "",
      address: "",
      zip_code: "",
    },
  );

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: formData,
  });

  function onsubmit(data) {
    setStep((prev) => prev + 1);
    setFormData(data);
    localStorage.setItem("deliveryInfo", JSON.stringify(data));
    console.log(data);
  }

  return (
    <div className="py-3">
      <div className="mt-4 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Order Form</h1>
        <p className="text-sm text-gray-900 dark:text-slate-300">
          We’re excited to bring your favorite dishes right to your doorstep.
        </p>
      </div>
      <div className="lg:justify-cente mt-6 grid">
        <h1 className="font-bold">Delivery Information</h1>
        <form
          className="md:grid md:grid-cols-2 md:gap-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div>
            <div className="mt-3">
              <label>Full Name</label>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  placeholder="Enter your FullName"
                  className="relative w-full bg-gray-200 px-8 py-3 text-sm text-gray-600 outline-none placeholder:text-sm focus:ring focus:ring-amber-400 focus:ring-offset-2"
                  {...register("name", { required: "This field is required" })}
                />
                <HiOutlineUser className="absolute ml-2 text-amber-600" />
              </div>
              {errors?.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mt-3">
              <label>Phone Number</label>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  placeholder="Enter your Phone-Number"
                  className="relative w-full bg-gray-200 px-8 py-3 text-sm text-gray-600 outline-none placeholder:text-sm focus:ring focus:ring-amber-400 focus:ring-offset-2"
                  {...register("phone_number", {
                    required: "This field is required",
                    pattern: {
                      value: /^(?:\+2519\d{8}|09\d{8})$/,
                      message: "Invalid Ethiopian phone number",
                    },
                  })}
                />
                <FaPhone className="absolute ml-2 text-amber-600" />
              </div>
              {errors.phone_number && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone_number.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="mt-3">
              <label className="">Address</label>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="relative w-full bg-gray-200 px-8 py-3 text-sm text-gray-600 outline-none placeholder:text-sm focus:ring focus:ring-amber-400 focus:ring-offset-2"
                  {...register("address", {
                    required: "This field is required",
                  })}
                />
                <HiOutlineLocationMarker className="absolute ml-2 text-amber-600" />
              </div>
              {errors.address && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className="mt-3">
              <label className="">ZIP / Postal code</label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter your Postal code"
                  className="w-full bg-gray-200 px-8 py-3 text-sm text-gray-600 outline-none placeholder:text-sm focus:ring focus:ring-amber-400 focus:ring-offset-2"
                  {...register("zip_code", {
                    required: "This field is required",
                  })}
                />
              </div>
              {errors.zip_code && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.zip_code.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2 mt-4 flex items-center justify-between">
            <BackButton onClick={onBack}>Back</BackButton>
            <Button variant="primary" size="lg">
              Continue to Payment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDeliverInfo;
