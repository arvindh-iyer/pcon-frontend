import React from "react";
import backgroundImage from "../assets/background.png";

export const WhoAreWe = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,

        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        opacity: 0.8,
      }}
    >
      Programming Club of Nit Jamshedpur
    </div>
  );
};
