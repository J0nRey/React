import React, { useEffect, useState } from "react";

import "./AppThemeToggle.css";

//function AppThemeToggle = () => {
function AppThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, []);

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  return (
    <div
      className={`AppThemeToggle ${theme} d-flex aling-items-center justify-content-center`}
      onClick={toggle}
    ></div>
  );
}

export default AppThemeToggle;
