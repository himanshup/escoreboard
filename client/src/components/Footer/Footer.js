import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 mb-4">
      <footer className="footer">
        <div className="container text-center">
          <a
            href="https://github.com/himanshup/escoreboard"
            className="text-dark "
          >
            <i className="icon ion-logo-github" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
