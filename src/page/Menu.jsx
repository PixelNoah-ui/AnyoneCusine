import { HiOutlinePlus, HiOutlineSearch } from "react-icons/hi";
import Button from "../Components/ui/Button";
import { Link, useSearchParams } from "react-router-dom";
import useGetDishes from "../Components/dishes/usegetDishes";
import Spinner from "../Components/ui/Spinner";
import { useDispatch } from "react-redux";
import { addItem } from "../Components/cart/cartslice";

function Menu() {
  const { dishes, isLoading } = useGetDishes();
  const [searchparams, setSearchparams] = useSearchParams();
  const filters = [
    { value: "all", label: "All" },
    { value: "main", label: "Main Dishes" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "breakfast", label: "Breakfast" },
    { value: "beverages", label: "Beverages" },
  ];
  let filterdishes;
  const currentFilterValue = searchparams.get("category") || "all";
  if (currentFilterValue === "all") filterdishes = dishes;
  if (currentFilterValue === "main")
    filterdishes = dishes?.filter((dish) => dish.category === "main");
  if (currentFilterValue === "breakfast")
    filterdishes = dishes?.filter((dish) => dish.category === "breakfast");
  if (currentFilterValue === "beverages")
    filterdishes = dishes?.filter((dish) => dish.category === "beverages");
  if (currentFilterValue === "vegetarian")
    filterdishes = dishes?.filter((dish) => dish.category === "vegetarian");

  function handleClick(filterValue) {
    searchparams.set("category", filterValue);
    setSearchparams(searchparams);
  }

  const dispatch = useDispatch();

  if (isLoading) return <Spinner />;

  return (
    <div className="w-full py-16 dark:bg-slate-800">
      <div className="bg-yellow-50 px-6 py-12 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Our Menu</h1>
          <p className="mb-5 text-slate-800 dark:text-white">
            Discover authentic Ethiopian dishes prepared with traditional spices
            and recipes.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8 bg-white px-6 dark:bg-slate-800">
        <div className="dark:placeholder:text-slate-990 flex items-center gap-5 rounded-3xl bg-gray-200 px-5 py-4 dark:bg-slate-500 dark:text-slate-950">
          <HiOutlineSearch className="text-xl" />
          <input
            type="text"
            placeholder="Searchn dishes..."
            className="text-sm outline-none"
          />
        </div>
      </div>
      <div className="container mx-auto px-6 pt-7 dark:text-white">
        <h1 className="text-xl font-bold md:text-2xl">Categories</h1>
        <div className="mt-6 mb-6 flex flex-wrap gap-3">
          {filters?.map((filter, index) => (
            <button
              onClick={() => handleClick(filter.value)}
              key={index}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium ${filter.value === currentFilterValue ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-800 dark:bg-slate-500"} dark:text-white`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-20 grid grid-cols-1 gap-2 px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {filterdishes?.map((dish) => (
            <Link
              key={dish.id}
              className="relative mt-5 rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-amber-200 dark:bg-slate-900 dark:text-white dark:hover:shadow-slate-600"
              to={`/dish/${dish.id}`}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="h-48 w-full rounded-t-xl object-cover"
              />

              {dish.type === "popular" && (
                <div className="absolute top-2 right-2">
                  <Button variant="primary" size="sm" type="circle">
                    {dish.type}
                  </Button>
                </div>
              )}
              <div className="px-5 py-5">
                <div>
                  <h2 className="text-xl font-semibold">{dish.name}</h2>
                  <span className="text-sm text-amber-600">{dish.subName}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                  {dish.description}
                </p>
                <div className="relative mt-4 flex items-center justify-between">
                  <h3 className="font-bold">{`${dish.price}.00 Birr`}</h3>
                  <div className="absolute right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-500 text-white transition-colors duration-300 hover:bg-amber-600">
                    <HiOutlinePlus
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        dispatch(
                          addItem({
                            ...dish,
                            quantity: 1,
                            size: "regular",
                            extra: [],
                            spiciness: "medium",
                            actualPrice: dish.price,
                          }),
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
