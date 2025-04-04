import { HiOutlineArrowRight, HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function PopularDishes() {
  const popularDishes = [
    {
      image: "/images/doro-wat.jpg",
      name: "Doro Wat",
      subName: "ዶሮ ወጥ",
      description: "Spicy chicken stew with berbere spice, served with injera.",
      price: 250,
      id: 1,
    },
    {
      image: "/images/shiro.jpg",
      name: "Shiro",
      subName: "ሽሮ",
      description: "Spiced, ground chickpea stew, a popular vegetarian option",
      price: 130,
      id: 4,
    },
    {
      image: "/images/kitfo.jpg",
      name: "Kitfo",
      subName: "ክትፎ",
      description: "Minced raw beef marinated in mitmita and niter kibbeh.",
      price: 400,
      id: 3,
    },
    {
      image: "/images/tibs.webp",
      name: "Tibs",
      subName: "ጥብስ ",
      description: "Sautéed meat chunks with vegetables and aromatic spices.",
      id: 2,
    },
  ];

  return (
    <section className="mx-auto bg-white px-4 py-16 dark:bg-slate-900 dark:text-white">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
          Popular Dishes
        </h2>
        <Link
          to="/menu"
          className="flex items-center gap-1 text-amber-600 hover:underline"
          aria-label="View all dishes"
        >
          View all <HiOutlineArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {popularDishes.map((dish) => (
          <article
            key={dish.id}
            className="group rounded-xl shadow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-amber-200 dark:bg-slate-800 dark:hover:shadow-slate-800"
          >
            <Link to={`/dish/${dish.id}`} className="block">
              <div className="relative">
                <img
                  src={dish.image}
                  alt={`${dish.name} - ${dish.subName}`}
                  loading="lazy"
                  width={300}
                  height={200}
                  className="h-48 w-full rounded-t-xl object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Button variant="primary" size="sm" type="circle">
                    Popular
                  </Button>
                </div>
              </div>

              <div className="p-5">
                <header>
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <p className="text-sm text-amber-600">{dish.subName}</p>
                </header>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-200">
                  {dish.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">{dish.price} Birr</span>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white transition-colors duration-300 hover:bg-amber-600"
                    aria-label={`Add ${dish.name} to order`}
                  >
                    <HiOutlinePlus />
                  </button>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PopularDishes;
