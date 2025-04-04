import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Components/ui/Button";

function OrderSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 dark:bg-slate-800">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-slate-900 dark:text-white dark:shadow-slate-700">
        <div className="mb-4 flex items-center justify-center">
          <FaCheckCircle className="text-5xl text-amber-600" />
        </div>
        <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800 dark:text-white">
          Order Successfully Placed
        </h1>
        <p className="mb-6 text-center text-sm text-gray-600 dark:text-slate-300">
          Your order has been successfully placed. We are processing it and will
          notify you once it's ready.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="tertiary"
            size="lg"
            type="circle"
            to="/myorder"
            className="rounded-lg bg-amber-600 px-6 py-2 text-white hover:bg-amber-700 focus:ring-2 focus:ring-amber-600 focus:outline-none"
          >
            View Orders
          </Button>
          <Button
            variant="tertiary"
            size="lg"
            type="circle"
            to="/menu" // Path to continue shopping
            className="rounded-lg bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
