import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-page fixed-bottom">
      <Link
        className="header-name"
        to="https://github.com/Leonardo-KF"
        target="_blank"
        rel="noopener"
      >
        Desenvolvido por Leonardo Fleck
      </Link>
    </div>
  );
}

export default Footer;
