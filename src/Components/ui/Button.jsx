import { Link } from "react-router-dom";

function Button({ children, variant, size, type, to, onClick }) {
  const baseClasses =
    "inline-flex items-center   justify-center font-medium transition-colors focus:outline-none  cursor-pointer";
  const sizeStyles = {
    sm: "text-xs py-1.5 px-3 ",
    md: "text-sm py-1 px-4",
    lg: "text-base py-3 px-5",
  };

  const variantClasses = {
    primary:
      "bg-amber-600 text-sky-50 hover:bg-amber-700 active:bg-amber-800 text-xs md:text-base",
    secondary:
      "bg-transparent border-1 text-sky-50 hover:bg-gray-50 hover:text-slate-900 border-white text-white hover:bg-white/20",

    accent:
      "bg-transparent border-1 text-red-600 px-4 py-2 hover:bg-red-100/20 text-sm",

    neutral: "px-3 py-2 text-amber-600 hover:bg-amber-100 text-sm",
    tertiary:
      "border hover:border-amber-600 hover:text-amber-600 transition-colors duration-300  text-sm  text-xs md:text-base",
  };

  // Conditional classes for rounded corners
  const roundedClasses = type === "circle" ? "rounded-full" : "rounded-md";

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeStyles[size]} ${roundedClasses} `}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeStyles[size]} ${roundedClasses}`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
