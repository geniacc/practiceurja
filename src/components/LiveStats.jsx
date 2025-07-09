import React, { useState, useEffect } from "react";
import "./LiveStats.css";

export default function LiveStats() {
  const [kmRun, setKmRun] = useState(0);
  const [drivers, setDrivers] = useState(0);
  const [batteries, setBatteries] = useState(0);

  useEffect(() => {
    const kmTarget = 125000;
    const driverTarget = 350;
    const batteryTarget = 750;
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentStep = 0;

    const counterInterval = setInterval(() => {
      currentStep++;
      setKmRun(Math.floor((kmTarget / steps) * currentStep));
      setDrivers(Math.floor((driverTarget / steps) * currentStep));
      setBatteries(Math.floor((batteryTarget / steps) * currentStep));

      if (currentStep >= steps) clearInterval(counterInterval);
    }, interval);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <div className="live-stats">
      <div className="stats-item">
        <span>KMs Run:</span>
        <strong>{kmRun}</strong>
      </div>
      <div className="stats-item">
        <span>Drivers:</span>
        <strong>{drivers}</strong>
      </div>
      <div className="stats-item">
        <span>Batteries:</span>
        <strong>{batteries}</strong>
      </div>
    </div>
  );
}
