import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="text-center">
      <div className="container text-center py-3 final">
        © Ian Darland { new Date().getFullYear() }
      </div>
    </footer>
  );
}

export default Footer;
