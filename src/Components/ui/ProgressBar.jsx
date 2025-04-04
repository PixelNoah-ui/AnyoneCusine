function ProgressBar({ step }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex w-full items-center gap-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600">
          <span className="text-white">1</span>
        </div>

        <div
          className={`flex-grow border-2 ${step > 0 ? "border-amber-600" : "border-gray-300"}`}
        ></div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${step > 0 ? "bg-amber-600" : "bg-gray-100"}`}
        >
          <span className={`${step > 0 ? "text-white" : "text-gray-800"}`}>
            2
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-sm text-gray-800 dark:text-slate-300">
        <span>Delivery Information</span>
        <span>Payment</span>
      </div>
    </div>
  );
}

export default ProgressBar;
