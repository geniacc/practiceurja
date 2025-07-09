import React, { useState } from "react";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <section className="feedback-form">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
