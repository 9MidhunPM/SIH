import React from "react";

function MenuPage() {
  return (
    <div className="content menu-page">
      {/* Temple Info Section */}
      <div className="menu-section">
        <h3>Temple Information</h3>
        <div className="menu-list">
          <div className="menu-item">
            <span className="icon">📍</span>
            <div className="item-content">
              <h4>Location</h4>
              <p>Jamnagar, Gujarat 361335, India</p>
            </div>
          </div>
          <div className="menu-item">
            <span className="icon">⏰</span>
            <div className="item-content">
              <h4>Timings</h4>
              <p>6:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="menu-section">
        <h3>Services</h3>
        <div className="menu-list">
          <div className="menu-item">
            <span className="icon">🙏</span>
            <div className="item-content">
              <h4>Darshan Puja</h4>
              <p>Book special puja services</p>
            </div>
          </div>
          <div className="menu-item">
            <span className="icon">🏪</span>
            <div className="item-content">
              <h4>Prasad Shop</h4>
              <p>Purchase prasad and offerings</p>
            </div>
          </div>
          <div className="menu-item">
            <span className="icon">💐</span>
            <div className="item-content">
              <h4>Offerring's Shop</h4>
              <p>Fresh flowers for offerings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="menu-section">
        <h3>Help & Support</h3>
        <div className="menu-list">
          <div className="menu-item">
            <span className="icon">📞</span>
            <div className="item-content">
              <h4>Contact Us</h4>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className="menu-item">
            <span className="icon">📧</span>
            <div className="item-content">
              <h4>Email</h4>
              <p>info@dwarkadhishtemple.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;