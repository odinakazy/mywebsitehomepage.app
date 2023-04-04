import React from "react";
import "./Testimony.css";
import Sidearrow1 from "../assets/Sidearrow1.png";
import Sidearrow2 from "../assets/Sidearrow2.png";
import Usericon from "../assets/User.png";
import Usericon1 from "../assets/User1.png";
import Usericon2 from "../assets/User2.png";
import Star from "../assets/Star3.png";
export default function Testimony() {
  return (
    <div className="testimonials">
      <div className="testmonial_title">
        <div className="title_text">
          <div className="title_header">
            <h5>Testimonial</h5>
            <h2> What Our Customer Say </h2>
          </div>
          <div className="title_arrows">
            <span className="imagered">
              <img src={Sidearrow1} alt="logo" />
            </span>
            <span className="imagered">
              <img src={Sidearrow2} alt="logo" />
            </span>
          </div>
        </div>
      </div>
      <div className="nancy">
        <div className="Amara">
          <div className="Amara2">
            <div className="Amara3">
              <div className="image_text">
                <div className="imageds">
                  <img src={Usericon} alt="logo" />
                </div>
                <div className="texted">
                  <ul>
                    <li>
                      <h3>kathy Smith</h3>
                    </li>
                    <li>Fuel company</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Amara4">
              <img src={Usericon1} alt="logo" />
            </div>
          </div>
          <div className="paragrap">
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>
          <div className="star">
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
          </div>
        </div>
        <div className="odi">
          <div className="Amara2">
            <div className="Amara3">
              <div className="image_text">
                <div className="imageds">
                  <img src={Usericon2} alt="logo" />
                </div>
                <div className="texteds">
                  <ul>
                    <li>
                      <h3>John Martin</h3>
                    </li>
                    <li>Oil Company</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Amara4">
              <img src={Usericon1} alt="logo" />
            </div>
          </div>
          <div className="paragraph">
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>
          <div className="star">
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
            <img src={Star} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
