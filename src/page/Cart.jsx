import {
  HiOutlineArrowLeft,
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi";
import Button from "../Components/ui/Button";
import { FaCreditCard, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQunatity,
  increaseQuantity,
} from "../Components/cart/cartslice";
import Modal from "../Components/ui/Modal";
import ConfirmRemoveItem from "../Components/ui/ConfirmRemoveItem";
import ClearCartConfirmation from "../Components/ui/ClearCartConfirmation";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartitem, totalPrice, deliveryFee } = useSelector(
    (state) => state.cart,
  );

  if (cartitem.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center dark:bg-slate-800 dark:text-white">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <FaShoppingBag className="text-4xl" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
          Your cart is empty
        </h1>
        <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-slate-300">
          Looks like you haven't added anything to your cart yet. Let's get you
          some delicious food!
        </p>
        <Button
          variant="tertiary"
          size="lg"
          type="circle"
          className="flex items-center gap-2 px-8 py-3 text-lg"
          onClick={() => navigate("/menu")}
        >
          <HiOutlineArrowLeft />
          Browse Menu
        </Button>
      </div>
    );
  }

  return (
    <>
      <Modal>
        <div className="px-4 py-20 dark:bg-slate-800 dark:text-white">
          <h1 className="mb-10 text-3xl font-bold md:text-4xl">Your Cart</h1>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            <div className="col-span-2">
              <div className="divided divide-y divide-gray-500 rounded-md border border-gray-200 px-4 shadow-md dark:border-slate-800 dark:bg-slate-900">
                {cartitem.map((item) => (
                  <div
                    className="mb-4 flex flex-col gap-2 py-4 sm:flex-row"
                    key={`${item.id}-${Math.random()}`}
                  >
                    <div className="h-26 w-24 overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full rounded-md object-cover"
                      />
                    </div>

                    <div className="flex flex-grow flex-col justify-between gap-1.5">
                      <h1 className="font-semibold">{item.name}</h1>
                      <div className="flex flex-col text-sm">
                        {item?.spiciness && (
                          <div className="capitalize">
                            <span className="mr-1 text-base font-bold">
                              Spiciness:
                            </span>
                            {item.spiciness}
                          </div>
                        )}

                        {item?.size && (
                          <div className="capitalize">
                            <span className="mr-1 text-base font-bold">
                              Size:
                            </span>
                            {item.size}
                          </div>
                        )}
                        {item.extra?.length > 0 && (
                          <div className="capitalize">
                            <span className="mr-1 text-base font-bold">
                              Extra:
                            </span>
                            {item.extra.map((extraValue, index) => (
                              <span className="mr-1" key={index}>
                                {extraValue.name}{" "}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 sm:justify-between">
                        <h1 className="font-bold">
                          {`${(item.price || 0).toFixed(2)} Birr`}
                        </h1>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              className="cursor-pointer rounded-full bg-gray-200 p-1 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-300"
                              onClick={() => dispatch(decreaseQunatity(item))}
                              disabled={item.quantity < 2}
                            >
                              <HiOutlineMinus />
                            </button>
                            <span>{item.quantity || 1}</span>
                            <button
                              className="cursor-pointer rounded-full bg-gray-200 p-1 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-300"
                              onClick={() => dispatch(increaseQuantity(item))}
                            >
                              <HiOutlinePlus />
                            </button>
                          </div>

                          <Modal.Toggle opens={item.id}>
                            <HiOutlineTrash className="cursor-pointer text-red-400 transition-colors duration-300 hover:text-red-600" />
                          </Modal.Toggle>
                          <Modal.Window name={item.id}>
                            <ConfirmRemoveItem item={item} />
                          </Modal.Window>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant="neutral" to="/menu">
                  Continue Shopping
                </Button>
                <Modal.Toggle opens="clear-cart">
                  <button className="inline-flex cursor-pointer items-center justify-center border-1 bg-transparent px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100/20 focus:outline-none">
                    Clear Cart
                  </button>
                </Modal.Toggle>
                <Modal.Window name="clear-cart">
                  <ClearCartConfirmation />
                </Modal.Window>
              </div>
            </div>
            <div className="col-span-1 rounded-lg bg-yellow-50 px-6 py-6 dark:bg-slate-900">
              <h1 className="mb-4 text-xl font-bold">Order Summary</h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{`${(totalPrice || 0).toFixed(2)} Birr`}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery Fee</span>
                  <span>{`${(deliveryFee || 0).toFixed(2)} Birr`}</span>
                </div>
                <div className="border-t-1 border-amber-300 py-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between text-xl">
                      <span>Total</span>
                      <span>{`${((totalPrice || 0) + (deliveryFee || 0)).toFixed(2)} Birr`}</span>
                    </div>
                    <button
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-amber-600 px-2 py-3 text-white transition-colors duration-300 hover:bg-amber-700 focus:ring focus:ring-amber-500 focus:ring-offset-2"
                      onClick={() => navigate("/checkout")}
                    >
                      <FaCreditCard />
                      <span className="font-semibold">
                        {" "}
                        Proceed to Checkout
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
