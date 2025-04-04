import { HiOutlineTrash, HiOutlineX } from "react-icons/hi";
import Button from "./Button";
import { useContext, useRef } from "react";
import { ModalContext } from "./Modal";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartslice";
import useOutsideClickHandler from "../hooks/useOutsideClickHandler";

function ClearCartConfirmation() {
  const { close } = useContext(ModalContext);
  const dispatch = useDispatch();
  const ref = useRef();
  useOutsideClickHandler(ref, close);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 px-6">
      <div
        className="relative container max-w-lg rounded-lg border border-gray-200 bg-white px-6 py-3 dark:border-slate-700 dark:bg-slate-900"
        ref={ref}
      >
        <div className="flex items-center justify-center">
          <HiOutlineTrash className="absolute top-[-25px] h-12 w-12 rounded-full bg-gray-50 p-2.5 text-6xl text-red-500 shadow-inner md:top-[-40px] md:h-20 md:w-20" />
        </div>
        <HiOutlineX
          className="absolute top-2 right-4 cursor-pointer text-2xl transition-colors duration-300 hover:text-gray-500"
          onClick={() => close()}
        />
        <div className="m-4 flex flex-col items-center gap-2 md:mt-8">
          <h1 className="font-bold">You are about to clear you cart</h1>
          <p className="text-sm text-gray-700 dark:text-slate-300">
            This will clear all your cart
          </p>
          <p className="text-sm text-gray-700 dark:text-slate-300">
            Are you sure ?
          </p>
        </div>
        <div className="items-cebter flex justify-end gap-3">
          <Button variant="tertiary" size="lg" onClick={() => close()}>
            Cancel
          </Button>
          <Button
            variant="accent"
            size="lg"
            onClick={() => dispatch(clearCart())}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClearCartConfirmation;
