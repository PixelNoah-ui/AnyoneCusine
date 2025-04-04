import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import Button from "../ui/Button";
import BackButton from "../ui/BackButton";
import { useParams } from "react-router-dom";
import useGetDish from "../dishes/useGetDish";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartslice";

function FoodDetails() {
  const { dishID } = useParams();
  const { dish, isLoading } = useGetDish(dishID);
  const [activeSpiciness, setActiveSpiciness] = useState(1);
  const [activeSize, setActiveSize] = useState(0);
  const [activeExtra, setActiveExtra] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectdSize, setselectdSize] = useState({});
  const [selecteExtra, setSelectedExtra] = useState([]);
  const [selectedSpiciness, setSelectedSpiciness] = useState();
  const dispatch = useDispatch();

  function toggleExtra(index, currentExtra) {
    setActiveExtra((prev) =>
      prev.includes(index)
        ? prev.filter((prevID) => prevID !== index)
        : [...prev, index],
    );
    setSelectedExtra((prevExtra) =>
      prevExtra.includes(currentExtra)
        ? prevExtra.filter((extra) => extra !== currentExtra)
        : [...prevExtra, currentExtra],
    );
  }

  const extraPrice = selecteExtra.reduce((acc, extra) => acc + extra.price, 0);

  function handleSize(index, value) {
    setActiveSize(index);
    setselectdSize(value);
  }

  function handleSpiciness(index, value) {
    setActiveSpiciness(index);
    setSelectedSpiciness(value || "");
  }
  let actualPrice;
  function calculateTotalPrice() {
    const basePrice = dish?.price || 0;
    actualPrice =
      (basePrice + (selectdSize.price || 0) + extraPrice) * quantity;
    return actualPrice;
  }

  function handleIncrease() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrease() {
    setQuantity((prev) => prev - 1);
  }

  function handleAddtoCart() {
    dispatch(
      addItem({
        ...dish,
        quantity,
        size: selectdSize.name || "regular",
        extra: selecteExtra || [],
        spiciness: selectedSpiciness || "medium",
        actualPrice,
      }),
    );
    setQuantity(1);
    setselectdSize({});
    setActiveSize(0);
    setActiveExtra([]);
    setSelectedExtra([]);
    setSelectedSpiciness({});
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="conttainer mx-auto bg-white px-16 py-22 dark:bg-slate-800 dark:text-white">
      <BackButton />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="mt-8 overflow-hidden rounded-xl md:aspect-[4/3]">
          <img
            src={dish?.image}
            alt={dish?.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-6 flex flex-col gap-8 md:col-span-2">
          <div>
            <h1 className="text-2xl font-bold">{dish?.name}</h1>
            <span className="text-amber-600">{dish?.subName}</span>
          </div>
          <p className="text-sm">{dish?.description}</p>
          {dish?.options?.spiciness && (
            <div>
              <h2 className="text-xl font-semibold">Spiciness Level </h2>
              <div className="mt-4 flex items-center gap-4">
                {dish?.options?.spiciness?.map((value, index) => (
                  <button
                    onClick={() => handleSpiciness(index, value)}
                    key={index}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium capitalize ${activeSpiciness === index ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-900"}`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}

          {dish?.options?.sizes && (
            <div>
              <h2 className="text-xl font-semibold">Size</h2>
              <div className="mt-4 flex items-center gap-4">
                {dish?.options?.sizes?.map((size, index) => (
                  <button
                    onClick={() => handleSize(index, size)}
                    key={index}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium capitalize ${activeSize === index ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-900"}`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          {dish?.options?.extras && (
            <div>
              <h2 className="text-xl font-semibold">Extras</h2>
              <div className="mt-4 flex items-center gap-4">
                {dish?.options?.extras?.map((extra, index) => (
                  <button
                    onClick={() => toggleExtra(index, extra)}
                    key={index}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium capitalize ${activeExtra.includes(index) ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-900"}`}
                  >
                    {extra.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-6 border-t-1 py-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Quantity</h2>
              <div className="flex items-center gap-3">
                <button
                  className={`cursor-pointer rounded-full bg-gray-200 px-2 py-2 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-300`}
                  onClick={handleDecrease}
                  disabled={quantity < 2}
                >
                  <HiOutlineMinus />
                </button>
                <span>{quantity}</span>
                <button
                  className={`cursor-pointer rounded-full bg-gray-200 px-2 py-2 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-300`}
                  onClick={handleIncrease}
                >
                  <HiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span>Total Price</span>
                <h1 className="text-2xl font-bold">{`${calculateTotalPrice().toFixed(2)} Birr`}</h1>
              </div>
              <Button variant="primary" size="lg" onClick={handleAddtoCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
