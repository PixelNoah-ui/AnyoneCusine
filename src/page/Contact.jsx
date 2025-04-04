import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import Button from "../Components/ui/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    toast.success("Your message has been sent successfully");
    reset();
  }

  return (
    <div className="w-full">
      <div className="relative h-full w-full overflow-hidden md:h-96">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/images/bg-image.jpg"
          className="h-auto w-full object-cover"
          alt="bg-image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-2xl text-amber-600" />
            <h1 className="text-3xl font-bold">Get in Touch</h1>
          </div>
          <p className="text-center text-sm">
            We'd love to hear from you! Whether you have a question, feedback,
            or a business inquiry, reach out using the details below.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 dark:bg-slate-800 dark:text-white">
        <div className="rounded-lg border border-gray-200 px-6 py-8 shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-amber-600">
            Send Us a Message
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium">Full Name</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-full rounded-md bg-gray-200 px-12 py-3 text-sm outline-none focus:ring focus:ring-amber-400 dark:text-slate-900 dark:placeholder:text-slate-900"
                  {...register("name", { required: "This field is required" })}
                />
                <HiOutlineUser className="absolute top-1/2 left-3 -translate-y-1/2 transform text-amber-600" />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <div className="relative mt-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full rounded-md bg-gray-200 px-12 py-3 text-sm outline-none focus:ring focus:ring-amber-400 dark:text-slate-900 dark:placeholder:text-slate-900"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                <HiOutlineMail className="absolute top-1/2 left-3 -translate-y-1/2 transform text-amber-600" />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Phone Number</label>
              <div className="relative mt-2">
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="w-full rounded-md bg-gray-200 px-12 py-3 text-sm outline-none focus:ring focus:ring-amber-400 dark:text-slate-900 dark:placeholder:text-slate-900"
                  {...register("phone", {
                    required: "This field is required",

                    pattern: {
                      value: /^(?:\+2519\d{8}|09\d{8})$/,
                      message: "Invalid Ethiopian phone number",
                    },
                  })}
                />
                <FaPhone className="absolute top-1/2 left-3 -translate-y-1/2 transform text-amber-600" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full rounded-md bg-gray-200 px-4 py-3 text-sm outline-none focus:ring focus:ring-amber-400 dark:text-slate-900 dark:placeholder:text-slate-900"
                {...register("message", { required: "This field is required" })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button variant="primary" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <div className="grid h-full w-full">
            <div className="px-6 py-8">
              <div className="rounded-lg border border-gray-200 px-6 py-8 shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-amber-600">
                  Contact Information
                </h1>

                <div className="mt-6 h-64 w-full">
                  <iframe
                    className="h-full w-full rounded-md border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9213892628893!2d38.76361107585685!3d9.0173224908385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c36f40e4df%3A0x3655f349e9a23eaa!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1646876600000!5m2!1sen!2set"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <a
                  href="https://www.google.com/maps?q=123+Bole+Road,+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-white shadow-md transition hover:bg-amber-700"
                >
                  <HiOutlineLocationMarker className="text-lg" />
                  Get Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
