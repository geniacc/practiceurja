import React, { useEffect, useState } from "react";
import carImg from "../assets/car-cursor.png";
import "./CarCursor.css";

export default function CarCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCar = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCar);
    return () => window.removeEventListener("mousemove", moveCar);
  }, []);

  return (
    <img
      src={carImg}
      alt="Car Cursor"
      className="car-cursor"
      style={{
        left: `${position.x + 10}px`,
        top: `${position.y + 10}px`
      }}
    />
  );
}
