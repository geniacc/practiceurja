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
      const easeOut = 1 - Math.pow(1 - (currentStep / steps), 3);
      setKmRun(Math.floor(kmTarget * easeOut));
      setDrivers(Math.floor(driverTarget * easeOut));
      setBatteries(Math.floor(batteryTarget * easeOut));

      if (currentStep >= steps) clearInterval(counterInterval);
    }, interval);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <div className="live-stats-wrapper">
      <div className="stats-header">Live Network Stats</div>
      <div className="stats-item">
        <span>KMs Run:</span>
        <strong>{kmRun.toLocaleString('en-IN')}</strong>
      </div>
      <div className="stats-item">
        <span>Drivers:</span>
        <strong>{drivers.toLocaleString('en-IN')}</strong>
      </div>
      <div className="stats-item">
        <span>Batteries:</span>
        <strong>{batteries.toLocaleString('en-IN')}</strong>
      </div>
    </div>
  );
}
