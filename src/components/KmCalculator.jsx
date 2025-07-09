import React, { useState } from "react";
import "./KmCalculator.css";

export default function KmCalculator() {
  const [kms, setKms] = useState(0);

  const addKm = () => setKms(kms + 1);

  return (
    <section className="km-calculator">
      <h2>Total KMs Run</h2>
      <p>{kms} KM</p>
      <button onClick={addKm}>Simulate KM Run</button>
    </section>
  );
}
