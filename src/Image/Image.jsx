import React from "react";
import "./Image.css";
import Backgroundicon from "../assets/Background.jpg";
export default function Image() {
  return (
    <div className="image_component">
      <img src={Backgroundicon} alt="logo" />;
    </div>
  );
}
