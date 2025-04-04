import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

function DarkMode({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false,
  );
  useEffect(
    function () {
      const root = window.document.documentElement;
      if (isDark) {
        root.classList.add("dark");
        localStorage.setItem("darkMode", JSON.stringify(isDark));
      } else {
        root.classList.remove("dark");
        localStorage.removeItem("darkMode");
      }
    },
    [isDark],
  );

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkMode;
