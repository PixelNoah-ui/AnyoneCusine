import React, { useState } from "react";
import {
  HiOutlineCheck,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDevicePhoneMobile,
  HiOutlinePhone,
  HiOutlineWallet,
} from "react-icons/hi2";
import { FaGlobe } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../cart/cartslice";

function PaymentMethodSelection({ onBack = () => {} }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.cart);

  const [activeMethod, setActiveMethod] = useState(null);
  const [selectPayment, setSelectPayment] = useState(null);

  const handleClick = () => {
    dispatch(clearCart());
    navigate("/order-success");
  };

  const paymentMethods = [
    {
      name: "Wallet",
      icon: <HiOutlineWallet className="text-2xl" />,
      description: "Pay from your digital wallet",
      id: 1,
      type: "wallet",
    },
    {
      name: "Mobile Bank",
      icon: <HiOutlineDevicePhoneMobile className="text-2xl" />,
      description: "Mobile banking and transfers",
      id: 2,
      type: "mobile",
    },
    {
      name: "International Payment",
      icon: <FaGlobe className="text-xl sm:text-2xl" />,
      description: "International cards and payments",
      id: 3,
      type: "international",
    },
  ];

  const walletOptions = [
    { logo: "/images/TeleBirr.svg", name: "Tele-birr" },
    { logo: "/images/CBE.svg", name: "CBE-birr" },
    { logo: "/images/Awash.svg", name: "Awash-birr" },
    { logo: "/images/coop.svg", name: "Coopay" },
  ];

  const mobileBankOptions = [
    { logo: "/images/CBE.svg", name: "CBE Mobile" },
    { logo: "/images/Awash.svg", name: "Awash Mobile" },
    { logo: "/images/TeleBirr.svg", name: "TeleBirr" },
  ];

  const renderWalletForm = () => (
    <>
      <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-slate-300">
        Choose Wallet
      </h3>
      <div className="mb-4 flex flex-wrap gap-3">
        {walletOptions.map((wallet, index) => (
          <div key={wallet.name} className="flex flex-col items-center">
            <div
              className="relative flex h-16 w-28 cursor-pointer items-center justify-center rounded-md border border-gray-200 shadow hover:shadow-lg dark:border-slate-600"
              onClick={() => setSelectPayment(index)}
            >
              <img src={wallet.logo} alt={wallet.name} className="h-10" />
              {selectPayment === index && (
                <HiOutlineCheck className="absolute top-1 right-1 rounded-full bg-green-500 p-0.5 text-white" />
              )}
            </div>
            <span className="mt-1 text-xs">{wallet.name}</span>
          </div>
        ))}
      </div>
      <label className="text-sm font-medium text-gray-700 dark:text-slate-300">
        Phone Number
      </label>
      <div className="relative mt-1 mb-4">
        <HiOutlinePhone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="09********"
          className="w-full rounded-md bg-gray-700 py-3 pr-4 pl-10 text-sm outline-none dark:text-white dark:placeholder:text-slate-300"
        />
      </div>
    </>
  );

  const renderMobileForm = () => (
    <>
      <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-slate-300">
        Choose Bank
      </h3>
      <div className="mb-4 flex flex-wrap gap-3">
        {mobileBankOptions.map((bank, index) => (
          <div key={bank.name} className="flex flex-col items-center">
            <div
              className="relative flex h-16 w-28 cursor-pointer items-center justify-center rounded-md border border-gray-200 shadow hover:shadow-lg dark:border-slate-600"
              onClick={() => setSelectPayment(index)}
            >
              <img src={bank.logo} alt={bank.name} className="h-10" />
              {selectPayment === index && (
                <HiOutlineCheck className="absolute top-1 right-1 rounded-full bg-green-500 p-0.5 text-white" />
              )}
            </div>
            <span className="mt-1 text-xs">{bank.name}</span>
          </div>
        ))}
      </div>
      <label className="text-sm font-medium text-gray-700 dark:text-slate-300">
        Account Number
      </label>
      <input
        type="text"
        placeholder="Enter your account number"
        className="mt-1 mb-4 w-full rounded-md bg-gray-200 px-4 py-3 text-sm outline-none dark:bg-slate-700"
      />
    </>
  );

  const renderInternationalForm = () => (
    <>
      <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-slate-300">
        Card Information
      </h3>
      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        className="mb-3 w-full rounded-md bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 dark:bg-slate-700"
      />
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="MM/YY"
          className="rounded-md bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 dark:bg-slate-700"
        />
        <input
          type="text"
          placeholder="CVV"
          className="rounded-md bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 dark:bg-slate-700"
        />
      </div>
    </>
  );

  const renderForm = () => {
    switch (activeMethod?.type) {
      case "wallet":
        return renderWalletForm();
      case "mobile":
        return renderMobileForm();
      case "international":
        return renderInternationalForm();
      default:
        return (
          <div className="py-6 text-center text-sm text-gray-500">
            Please select a payment method to continue
          </div>
        );
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4 shadow-sm dark:border-slate-900 dark:bg-slate-900 dark:text-slate-300">
          <h2 className="mb-4 text-center text-base font-semibold">
            Select a Payment Method
          </h2>
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`mb-2 flex cursor-pointer items-center justify-between rounded-md border p-3 transition ${
                activeMethod?.id === method.id
                  ? "border-amber-400 bg-amber-100"
                  : "border-gray-200 bg-gray-50"
              }`}
              onClick={() => setActiveMethod(method)}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full border bg-white p-2 dark:text-slate-900">
                  {method.icon}
                </div>
                <div className="dark:text-slate-900">
                  <p className="font-medium">{method.name}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-950">
                    {method.description}
                  </p>
                </div>
              </div>
              <HiOutlineChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>

        <div className="shadow-s rounded-lg border bg-white p-4 dark:bg-slate-900 dark:text-white">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-300">
              {activeMethod ? activeMethod.name : "Payment Details"}
            </h3>
          </div>
          {renderForm()}
          {activeMethod && (
            <button
              onClick={handleClick}
              className="mt-4 w-full rounded-md bg-amber-500 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Pay ETB {totalPrice.toFixed(2)}
            </button>
          )}
        </div>
      </div>

      <div
        className="mt-6 flex cursor-pointer items-center gap-2 text-sm text-amber-600 hover:underline"
        onClick={onBack}
      >
        <HiOutlineChevronLeft />
        Back
      </div>
    </div>
  );
}

export default PaymentMethodSelection;
