import React, { useEffect, useState } from "react";
import "./AppLoading.css";

function AppLoading() {
  const [isActive, setIsActive] = useState(true);
  const active = isActive ? "active" : "";

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 400);
  }, []);

  return (
    <div
      className={` loading ${active} align-items-center justify-content-center`}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default AppLoading;
