import { useState } from "react";
import Button from "../Components/ui/Button";

function Myorder() {
  const [activeFilter, setActiveFilter] = useState("View all");
  const filters = [
    "View all",
    "Pending",
    "Confirmed",
    "Preparing",
    "Out of Delivery",
    "Delivered",
    "Canceled",
  ];

  return (
    <div className="w-full py-16 dark:bg-slate-800">
      <div className="relative h-32 overflow-hidden sm:h-44 md:h-56 lg:h-72">
        <img
          src="/images/order.webp"
          alt="My Orders background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            My Orders
          </h1>
        </div>
      </div>

      <div className="container px-6 py-8 dark:text-white">
        <div className="mb-2 flex flex-wrap items-center gap-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative flex flex-col items-center text-sm font-medium transition-colors dark:text-white ${
                activeFilter === filter
                  ? "text-amber-600"
                  : "text-gray-600 hover:text-amber-600"
              }`}
            >
              <span>{filter}</span>
              <span
                className={`mt-0.5 h-0.5 w-5 rounded-full bg-amber-600 transition-all duration-300 ${
                  activeFilter === filter ? "scale-100" : "scale-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-lg border border-gray-200 p-4 shadow-lg md:flex-row dark:border-slate-950 dark:shadow-slate-700">
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <img
              src="/images/bg-image.jpg"
              alt="Order item"
              className="h-16 w-20 rounded-md md:h-32 md:w-40"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold md:text-base">Shiro</h1>
              <div className="flex flex-col text-xs font-semibold text-gray-400 md:text-sm dark:text-slate-300">
                <span>Spiciness: medium</span>
                <span>Size: regular</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <h1 className="font-bold">180.00 Birr</h1>
                <span className="text-gray-400">x2</span>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center gap-2 md:mt-0">
            <h1 className="text-xs font-bold tracking-wider text-gray-500 md:text-sm dark:text-slate-300">
              Total: ETB 390.99
            </h1>
            <div className="flex w-full flex-col gap-2">
              <Button variant="primary" size="lg" type="circle">
                Confirm received
              </Button>
              <Button variant="tertiary" size="lg" type="circle">
                Track order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myorder;
