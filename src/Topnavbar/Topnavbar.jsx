import "./Topnavbar.css";
import React from "react";
import logo from "../assets/Logo.png";
import timeicon from "../assets/timeicon.png";
import callicon from "../assets/callicon.png";
import emailicon from "../assets/emailicon.png";

export default function Topnavbar() {
  return (
    <div className="header_container">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <div className="nav_link">
            <div className="timeicon">
              <img src={timeicon} alt="logo" />
            </div>
            <div className="span">
              <span>Mon-Sat 9.00-18.00</span>
              <span>Sunday Closed</span>
            </div>
          </div>
          <div className="nav_link">
            <div className="timeicon">
              <img src={emailicon} alt="logo" />
            </div>
            <div className="span">
              <span>Email</span>
              <span>contact@logistics.com</span>
            </div>
          </div>
          <div className="nav_link">
            <div className="timeicon">
              <img src={callicon} alt="logo" />
            </div>
            <div className="span">
              <span>Call Us</span>
              <span>(00)112 365 489</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
