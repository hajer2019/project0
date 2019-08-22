import React from "react";
import logoImage from "../images/logo1.png";
import Modal from "./modal";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoImage} alt="" />
      </div>
      <div className="menu">
        <ul class="nav nav-tabs" role="tablist">
          <Link to="/home" className="nav-link ">
            <li className="nav-item">Home</li>
          </Link>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu1">
              location
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu2">
              vente
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu2">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="auth">
        <div className="login">Login</div>
        <div className="signup">
          <Modal />
        </div>
      </div>
    </div>
  );
}
export default Header;
