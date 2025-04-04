import { useState } from "react";
import ProgressBar from "../Components/ui/ProgressBar";
import UserDeliverInfo from "../Components/Checkout/UserDeliverInfo";
import PaymentMethodSelection from "../Components/Checkout/PaymentMethodSelection";

function Checkout() {
  const [step, setStep] = useState(0);
  function onBack() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <div className="px-6 py-20 dark:bg-slate-800 dark:text-white">
      <ProgressBar step={step} />
      {step === 0 ? (
        <UserDeliverInfo onBack={onBack} setStep={setStep} step={step} />
      ) : (
        <PaymentMethodSelection onBack={onBack} />
      )}
    </div>
  );
}

export default Checkout;
