import React from "react";
import "./Contact.css";
import timeicon from "../assets/timeicon.png";
import callicon from "../assets/callicon.png";
import emailicon from "../assets/emailicon.png";
import Contact1 from "../assets/Contact1.png";
import Contact2 from "../assets/Contact2.png";
import Contact3 from "../assets/Contact3.png";
import Contact4 from "../assets/Contact4.png";

export default function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_cont">
        <div className="contact_form">
          <div className="contact_form_t">
            <h6>Contact</h6>
            <h1>Get in touch with us</h1>
            <h5>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </h5>
            <div className="contact_icon">
              <span>
                <img className="contactico" src={emailicon} alt="logo" />
              </span>
              <span className="contact_span">
                <ul>
                  <li>Email</li>
                  <li>contact@logistics.com</li>
                </ul>
              </span>
            </div>
            <div className="contact_icon">
              <span>
                <img className="contactico" src={callicon} alt="logo" />
              </span>
              <span className="contact_span">
                <ul>
                  <li>Call Us</li>
                  <li>(00) 112 365 489</li>
                </ul>
              </span>
            </div>
            <div className="contact_icon">
              <span>
                <img className="contactico" src={timeicon} alt="logo" />
              </span>
              <span className="contact_span">
                <ul>
                  <li>Mon - Sat 9.00 - 18.00 </li>
                  <li>Sunday Closed</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="contact_form_for">
            <div className="contact_form_fory">
              <form>
                <span>
                  <input type="text" placeholder="Your name*" />
                </span>
                <span className="spanwid">
                  <input type="text" placeholder="Email*" />
                </span>
                <span className="space">
                  <input type="text" placeholder="Phone number*" />
                </span>
                <span className="spanwid">
                  <input type="text" placeholder="city*" />
                </span>
                <textarea className="space">Your message ...</textarea>
                <input type="submit" class="button1" value=" Submit Message" />
              </form>
            </div>
          </div>
        </div>
        <div className="contact_img">
          <span>
            <img className="contactim" src={Contact1} alt="logo" />
          </span>
          <span>
            <img className="contactim" src={Contact2} alt="logo" />
          </span>
          <span>
            <img className="contactim" src={Contact3} alt="logo" />
          </span>
          <span>
            <img className="contactim" src={Contact4} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
}
