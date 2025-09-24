import React from "react";

function ProfilePage() {
  return (
    <div className="content profile-page">
      {/* Profile Info Section */}
      <div className="profile-section">
        <div className="profile-avatar">
          👤
        </div>
        <h2>Mevin Benty</h2>
        <p className="profile-info">Member since 2023</p>
      </div>

      {/* Visit History Section */}
      <div className="profile-section">
        <h3>Recent Visits</h3>
        <div className="visit-list">
          <div className="visit-item">
            <div className="visit-date">Sept 20, 2025</div>
            <div className="visit-time">Morning Slot - 10:30 AM</div>
          </div>
          <div className="visit-item">
            <div className="visit-date">Sept 15, 2025</div>
            <div className="visit-time">Evening Slot - 4:30 PM</div>
          </div>
          <div className="visit-item">
            <div className="visit-date">Sept 10, 2025</div>
            <div className="visit-time">Morning Slot - 11:00 AM</div>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="profile-section">
        <h3>Preferences</h3>
        <div className="preferences-list">
          <div className="preference-item">
            <label>
              <input type="checkbox" checked readOnly />
              Notifications
            </label>
          </div>
          <div className="preference-item">
            <label>
              <input type="checkbox" checked readOnly />
              Email Updates
            </label>
          </div>
          <div className="preference-item">
            <label>
              <input type="checkbox" checked readOnly />
              Crowd Alerts
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;