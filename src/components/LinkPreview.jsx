import React, { useState, useRef, useEffect } from "react";
import "./LinkPreview.css";

export default function LinkPreview({ url, children, title, description, image }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("bottom");
  const wrapperRef = useRef();

  useEffect(() => {
    if (visible && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const { innerWidth, innerHeight } = window;

      // Adjust popover position to avoid overflow
      if (rect.bottom + 210 > innerHeight) {
        setPosition("top");
      } else if (rect.left + 290 > innerWidth) {
        setPosition("left");
      } else if (rect.left - 290 < 0) {
        setPosition("right");
      } else {
        setPosition("bottom");
      }
    }
  }, [visible]);

  return (
    <span
      className="link-preview-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={wrapperRef}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="link-text">
        {children}
      </a>

      {visible && (
        <div className={`link-preview-card ${position}`}>
          {image && (
            <div className="preview-image">
              <img src={image} alt={title || "preview"} />
            </div>
          )}
          <div className="preview-content">
            <h4>{title || url}</h4>
            <p>{description || "Click to learn more"}</p>
          </div>
        </div>
      )}
    </span>
  );
}
