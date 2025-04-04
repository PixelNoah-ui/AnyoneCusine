import Button from "../ui/Button";

function DiscountBanner() {
  const discounts = [
    {
      image: "/images/specialchips.jpg",
      header: "20% OFF FIRST ORDER",
      description: "Use code WELCOME20 at checkout",
      id: 1,
    },
    {
      image: "/images/special-food.jpg",
      header: "FAMILY MEAL DEAL",
      description: "2 Large Tibs + 4 Drinks for 1200 Birr",
      id: 2,
    },
    {
      image: "/images/pepsi.jpg",
      header: "FREE DELIVERY",
      description: "On orders over 2000 Birr",
      id: 3,
    },
  ];

  return (
    <section className="mx-auto px-4 py-16 dark:bg-gray-800 dark:text-white">
      <h2 className="text-center text-3xl font-bold">Special Offers</h2>

      <div className="mt-7 grid gap-6 md:grid-cols-3">
        {discounts.map((discount) => (
          <article
            key={discount.id}
            className="overflow-hidden rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.02] dark:bg-slate-900"
          >
            <img
              src={discount.image}
              alt={discount.header}
              loading="lazy"
              width={400}
              height={300}
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-4">
              <h3 className="text-lg font-bold">{discount.header}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {discount.description}
              </p>
              <Button
                variant="primary"
                size="lg"
                to="/menu"
                type="circle"
                className="mt-2"
                aria-label={`Order now - ${discount.header}`}
              >
                Order Now
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DiscountBanner;
