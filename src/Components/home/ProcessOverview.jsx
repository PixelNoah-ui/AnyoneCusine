const processSteps = [
  {
    icon: "🍽️",
    title: "Browse Menu", // Fixed typo ("Men" → "Menu")
    description:
      "Explore our authentic Ethiopian dishes and select your favorites.",
  },
  {
    icon: "📱",
    title: "Place Your Order",
    description: "Customize your meal, add to cart, and proceed to checkout.",
  },
  {
    icon: "🚚",
    title: "Enjoy Your Meal",
    description: "We'll prepare and deliver your food fresh to your doorstep.",
  },
];

function ProcessOverview() {
  return (
    <div className="bg-yellow-50 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="mb-7 text-center text-3xl font-bold">How It Works</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-md bg-white px-4 py-6 text-center shadow-md dark:bg-slate-800"
            >
              <span className="text-4xl">{step.icon}</span>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-slate-500 dark:text-slate-200">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessOverview;
