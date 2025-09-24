import React, { useState } from "react";

function FeaturePage() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const timeSlots = ["10:30", "11:00", "11:30", "12:00"];

  return (
    <div className="content features-page">
      {/* Slot Booking Section */}
      <div className="feature-section">
        <h3>Slot Booking</h3>
        <div className="time-slots">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`time-slot ${selectedSlot === time ? 'selected' : ''}`}
              onClick={() => setSelectedSlot(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Queue Status Section */}
      <div className="feature-section">
        <h3>Queue Status</h3>
        <div className="queue-info">
          <div className="queue-time">
            <span className="queue-icon">⏱</span>
            <span className="time">45 min</span>
          </div>
          <div className="queue-number">
            <span className="number">123</span>
            <span className="label">in queue</span>
          </div>
        </div>
      </div>

      {/* Map & Navigation Section */}
      <div className="feature-section">
        <h3>Map & Navigation</h3>
        <div className="map-container">
          <div className="map-area">
            <div className="map-pin">📍</div>
          </div>
        </div>
      </div>

      {/* SOS Button */}
      <button className="sos-btn">SOS</button>
    </div>
  );
}

export default FeaturePage;
