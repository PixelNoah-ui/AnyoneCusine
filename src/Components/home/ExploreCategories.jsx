import { Link } from "react-router-dom";

function ExploreCategories() {
  const featuredDishes = [
    {
      label: "Main Dishes",
      category: "main",
      image: "/images/doro-wat.jpg",
      name: "doro-wat",
      id: 1,
    },
    {
      label: "Vegetarian ",
      category: "vegetarian",
      image: "/images/aynat.jpg",
      name: "aynat",
      id: 2,
    },
    {
      label: "Breakfast ",
      category: "breakfast",
      image: "/images/equlalfirfir.jpg",
      name: "equlalfifir",
      id: 3,
    },
    {
      label: "Beverages",
      category: "beverages",
      image: "/images/pepsi.jpg",
      name: "pepsi",
      id: 4,
    },
  ];

  return (
    <div className="bg-yellow-50 px-4 py-16 dark:bg-slate-800">
      <div className="">
        <h1 className="container mx-auto mb-7 max-w-7xl text-center text-3xl font-bold text-slate-900 dark:text-white">
          Explore Our Categories
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {featuredDishes?.map((dish) => (
            <div
              className="relative h-48 overflow-hidden rounded-xl"
              key={dish.id}
            >
              <Link
                to={`/menu?category=${dish?.category}`}
                className="block h-full w-full"
              >
                <img
                  src={dish.image}
                  loading="lazy"
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 rounded-full bg-black/50 px-4 py-1 font-bold text-white">
                  {dish.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreCategories;
