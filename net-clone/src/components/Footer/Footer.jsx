import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className="footer-columns">
        <ul>
          <li>
            <a href="#">Audio and Subtitles</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Audio Description</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
        </ul>
      </div>

      {/* <div className="footer-icons">
        <a href="#">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </div> */}

      <p className="footer-note">© 2025 Netflix Clone. Abel.</p>
    </footer>
  );
};

export default Footer;
