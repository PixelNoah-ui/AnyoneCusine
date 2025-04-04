function QouteCard({ qoutes }) {
  const { name, location, quote, image } = qoutes;
  return (
    <div className="relative bg-yellow-50 px-4 py-6 shadow-md dark:bg-slate-900 dark:text-white">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <img
            src={image}
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold">{name}</h2>
          <span className="text-sm text-slate-600 dark:text-slate-300">
            {location}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <p className="flex-1 dark:text-slate-300">{quote}</p>
      </div>
      <div></div>
    </div>
  );
}

export default QouteCard;
