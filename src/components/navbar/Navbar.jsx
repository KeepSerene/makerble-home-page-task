import "./navbar.css";

// React imports
import { useState } from "react";

// Icon imports
import { Bell, Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          <div className="logo">M</div>
        </a>

        <div className="navbar-links">
          <a href="#" className="nav-link">
            My apps
          </a>

          <a href="#" className="nav-link active">
            Home
          </a>

          <a href="#" className="nav-link">
            Explore
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Click to toggle mobile menu"
          className="hamburger-btn"
        >
          <Menu />
        </button>

        <div className="navbar-actions">
          <button
            type="button"
            className="notification-btn"
            aria-label="Click to view notifications"
            title="View notifications"
          >
            <Bell />
          </button>

          <img
            src="https://picsum.photos/200"
            alt="User avatar"
            className="avatar"
          />
        </div>
      </nav>

      <div className={`mobile-nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Click to toggle the mobile menu"
          className="close-btn"
        >
          <X />
        </button>

        <ul role="list" className="mobile-nav-links">
          <li>
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-link"
            >
              My apps
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-link active"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-link"
            >
              Explore
            </a>
          </li>
        </ul>

        <div className="mobile-nav-actions">
          <button
            type="button"
            className="notification-btn"
            aria-label="Click to view notifications"
            title="View notifications"
          >
            <Bell />
          </button>

          <img
            src="https://picsum.photos/200"
            alt="User avatar"
            className="avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
