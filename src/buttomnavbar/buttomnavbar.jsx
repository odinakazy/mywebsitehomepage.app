import "./buttomnavbar.css";
import React from "react";
import instargramicon from "../assets/Instagram.png";
import facebookicon from "../assets/Facebook.png";
import twittericon from "../assets/Twitter.png";
import linkedinicon from "../assets/Linkdin.png";
const buttomnavbar = () => {
  return (
    <div className="menu_container">
      <div className="menu_wrapper">
        <div className="menubar">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Pages">Pages</a>
            </li>
            <li>
              <a href="#Project">Project</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menucontext">
          <div className="socialhandles">
            <img src={instargramicon} alt="logo" />
            <img src={facebookicon} alt="logo" />
            <img src={twittericon} alt="logo" />
            <img src={linkedinicon} alt="logo" />
          </div>
          <div className="btn"></div>
        </div>
      </div>
    </div>
  );
};
export default buttomnavbar;
