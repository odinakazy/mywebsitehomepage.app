import React from "react";
import "./Services.css";
import airflighticon from "../assets/Icon11.png";
import seaflighticon from "../assets/Icon8.png";
import warehoussingicon from "../assets/Icon9.png";
import localshippingicon from "../assets/Icon10.png";

export default function Services() {
  return (
    <div className="service_container">
      <div className="heading">
        <h4>What We Do</h4>
        <h1>Safe & Reliable Cargo Solutions</h1>
      </div>
      <div className="content">
        <div className="content_text">
          <div className="content_image1">
            <div>
              <img src={seaflighticon} alt="logo" />
            </div>
            <div>
              <h4>Sea Transport Services</h4>
              <h6>
                Following the quantity of our service thus having gained trust
                of our many client{" "}
              </h6>
            </div>
          </div>
          <div className="content_image2">
            <div>
              <img src={warehoussingicon} alt="logo" />
            </div>
            <div>
              <h4>Warehousing Service</h4>
              <h6>
                Following the quantity of our service thus having gained trust
                of our many client{" "}
              </h6>
            </div>
          </div>
        </div>
        <div className="content_text2">
          <div className="content_image3">
            <div>
              <img src={airflighticon} alt="logo" />
            </div>
            <div>
              <h4>Air Flight Services</h4>
              <h6>
                Following the quantity of our service thus having gained trust
                of our many client{" "}
              </h6>
            </div>
          </div>
          <div className="content_image4">
            <div>
              <img src={localshippingicon} alt="logo" />
            </div>
            <div>
              <h4>Local ShippingService</h4>
              <h6>
                Following the quantity of our service thus having gained trust
                of our many client{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
