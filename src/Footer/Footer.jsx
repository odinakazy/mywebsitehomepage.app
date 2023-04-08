import React from "react";
import "./Footer.css";
import Footerimg from "../assets/Footerimg.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_imgs">
        <img src={Footerimg} alt="logo" />
      </div>
      <div className="footer_content">
        <p>
          Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
        </p>
      </div>
    </div>
  );
}
