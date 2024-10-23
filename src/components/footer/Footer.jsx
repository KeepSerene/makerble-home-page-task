import "./footer.css";

// Icon imports
import { Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h2 className="footer-title footer-logo">
          <a href="#">Makerble</a>
        </h2>

        <ul role="list" className="footer-links">
          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Terms and Conditions</a>
          </li>

          <li>
            <a href="#">Privacy & Cookies</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h2 className="footer-title">Organization</h2>

        <ul role="list" className="footer-links">
          <li>
            <a href="#">Organization 1</a>
          </li>

          <li>
            <a href="#">Organization 2</a>
          </li>

          <li>
            <a href="#">Organization 3</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h2 className="footer-title">Your Account</h2>

        <ul role="list" className="footer-links">
          <li>
            <a href="#">Library</a>
          </li>

          <li>
            <a href="#">Profile</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h2 className="footer-title">Explore</h2>

        <ul role="list" className="footer-links">
          <li>
            <a href="#">Explore 1</a>
          </li>

          <li>
            <a href="#">Explore 2</a>
          </li>

          <li>
            <a href="#">Explore 3</a>
          </li>

          <li>
            <a href="#">Explore 4</a>
          </li>

          <li>
            <a href="#">Explore 5</a>
          </li>

          <li>
            <a href="#">Explore 6</a>
          </li>

          <li>
            <a href="#">Explore 7</a>
          </li>

          <li>
            <a href="#">Explore 8</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h2 className="footer-title">Follow us on</h2>

        <div className="footer-social-icons">
          <a href="#" aria-label="Follow us on LinkedIn" title="LinkedIn">
            <Linkedin size={20} />
          </a>

          <a href="#" aria-label="Follow us on YouTube" title="YouTube">
            <Youtube size={20} />
          </a>

          <a
            href="#"
            aria-label="Follow us on X, formerly known as Twitter"
            title="X (Twitter)"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>

      <p className="footer-developer-credit">
        Developed by{" "}
        <a
          href="https://github.com/KeepSerene/"
          target="_blank"
          className="developer-link"
        >
          Dhrubajyoti Bhattacharjee.
        </a>
      </p>
    </footer>
  );
}

export default Footer;
