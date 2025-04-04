function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative h-16 w-16">
        <div
          className="absolute h-full w-full animate-spin rounded-full border-3 border-solid border-amber-700 border-t-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />

        <img
          src="/images/favicon.png"
          className="h-full w-full rounded-full border-4 border-transparent"
          alt="Loading..."
        />
      </div>
    </div>
  );
}

export default Spinner;
