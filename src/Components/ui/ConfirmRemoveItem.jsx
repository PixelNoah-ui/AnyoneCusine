import { useContext, useRef } from "react";
import { ModalContext } from "./Modal";
import { removeCart } from "../cart/cartslice";
import Button from "./Button";
import { useDispatch } from "react-redux";
import useOutsideClickHandler from "../hooks/useOutsideClickHandler";

function ConfirmRemoveItem({ item }) {
  const { close } = useContext(ModalContext);
  const dispatch = useDispatch();
  const ref = useRef();
  useOutsideClickHandler(ref, close);

  return (
    <div
      id="confirmationModal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl dark:bg-slate-900"
        ref={ref}
      >
        <div className="flex items-center justify-between border-b p-5">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-red-100 p-2 text-red-600 dark:bg-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3
              id="modalTitle"
              className="text-xl font-semibold text-gray-900 dark:text-white"
            >
              Remove item from Cart
            </h3>
          </div>
          <button
            onClick={() => close()}
            className="cursor-pointer text-gray-400 hover:text-gray-500 focus:outline-none dark:hover:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <p
            id="modalDescription"
            className="text-gray-600 dark:text-slate-300"
          >
            {`Are you sure you want to remove  ${item.name} from your cart`}
          </p>
        </div>

        <div className="flex justify-end space-x-3 bg-gray-50 px-5 py-4 dark:bg-slate-800">
          <Button
            variant="tertiary"
            type="circle"
            onClick={() => close()}
            size="md"
          >
            Cancel
          </Button>
          <Button
            variant="accent"
            type="circle"
            size="md"
            onClick={() => dispatch(removeCart(item))}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRemoveItem;
