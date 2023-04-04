import React from "react";
import "./Why.css";
import ImageBB from "../assets/ImageBB.png";
import Icon12 from "../assets/Icon12.png";
import Icon13 from "../assets/Icon13.png";
import Icon14 from "../assets/Icon14.png";
import Icon15 from "../assets/Icon15.png";
import Icon16 from "../assets/Icon16.png";
import Icon17 from "../assets/Icon17.png";
export default function Why() {
  return (
    <div className="why">
      <div className="whychooseus">
        <div className="whychooseus_box1">
          <img src={ImageBB} alt="logo" />
        </div>
        <div className="whychooseus_box2">
          <div className="box_body">
            <div className="box_header">
              <h5>Why Choose</h5>
              <h1> We create opportunity to reach potential</h1>
              <span>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </span>
            </div>
            <div className="box_content">
              <div className="box_content1">
                <div>
                  <span>
                    <img src={Icon12} alt="logo" />
                  </span>
                  <span className="safe">Safe Package</span>
                </div>
                <div>
                  <span>
                    <img src={Icon13} alt="logo" />
                  </span>
                  <span className="safe">Global Tracking</span>
                </div>
                <div>
                  <span>
                    <img src={Icon14} alt="logo" />
                  </span>
                  <span className="safe">In Time Delivery</span>
                </div>
              </div>
              <div className="box_content2">
                <div>
                  <span>
                    <img src={Icon15} alt="logo" />
                  </span>
                  <span className="safe">Ship Everywhere</span>
                </div>
                <div>
                  <span>
                    <img src={Icon16} alt="logo" />
                  </span>
                  <span className="safe">24/7 Support</span>
                </div>
                <div>
                  <span>
                    <img src={Icon17} alt="logo" />
                  </span>
                  <span className="safe">Transparant pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
