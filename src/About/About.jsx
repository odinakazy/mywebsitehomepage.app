import React from "react";
import "./About.css";
import imagesicon from "../assets/Images.png";
import Deliveryimagesicon from "../assets/Icon6.png";
import Travelimagesicon from "../assets/Icon7.png";
import Patternicon from "../assets/Pattern.png";

export default function About() {
  return (
    // <div className="about_container">
    //   <div className="content_container">
    //     <div className="about">
    //       <div className="container">
    //         <div className="text_container">
    //           <h4> Why Us</h4>
    //           <h1>We provide full range global logistics solution</h1>
    //           <h5>
    //             Leverage agile framework to provide a robust synopsis for
    //             strategy foster collaborative thinking to further thr overall
    //             value proposition{" "}
    //           </h5>
    //           <h5>
    //             Organically grow the holistic world view of disruptive
    //             innovation via workspace diversity and empowerment
    //           </h5>
    //           <div className="flex">
    //             <div className="travelimg">
    //               <img src={Deliveryimagesicon} alt="logo" />
    //             </div>
    //             <div>
    //               <h4>Delivery on Time</h4>
    //             </div>
    //           </div>
    //           <div className="flex">
    //             <div className="travelimg">
    //               <img src={Travelimagesicon} alt="logo" />
    //             </div>
    //             <div>
    //               <h4>Optimized Travel Cost</h4>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="image">
    //           <img src={imagesicon} alt="logo" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="counter_container">
    //     <div className="counter">
    //       <div className="counter_text">
    //         <div>
    //           <h1>1294</h1>
    //         </div>
    //         <div>
    //           <img src={Patternicon} alt="logo" />
    //         </div>
    //         <div>
    //           <h3>Delivered Package</h3>
    //         </div>
    //       </div>
    //       <div className="counter_text">
    //         <div>
    //           <h1>3594</h1>
    //         </div>
    //         <div>
    //           <img src={Patternicon} alt="logo" />
    //         </div>
    //         <div>
    //           <h3>Satisfied Client </h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="about_container">
      <div className="content_container">
        <div className="odinaka">
          <div className="text_container">
            <p>Why Us</p>
            <h2>We provide full range global logistics solution</h2>
            <p className="PO">
              Leverage agile framework to provide a robust synopsis for strategy
              foster collaborative thinking to further thr overall value
              proposition{" "}
            </p>
            <p className="PO">
              Organically grow the holistic world view of disruptive innovation
              via workspace diversity and empowerment
            </p>
            <div className="flex">
              <img
                src={Deliveryimagesicon}
                alt="logo"
                className="travelimage"
              />
              <span>Delivery on Time</span>
            </div>
            <div className="flex">
              <img src={Travelimagesicon} alt="logo" className="travelimage" />
              <span>Optimized Travel Cost</span>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={imagesicon} alt="logo" />
        </div>
      </div>
      <div className="counter_container">
        <div className="counter">
          <div className="counter_text">
            <div>
              <h1 className="amara">1294</h1>
            </div>
            <div>
              <img src={Patternicon} alt="logo" />
            </div>
            <div>
              <h3 className="amara">Delivered Package</h3>
            </div>
          </div>
          <div className="counter_text">
            <div>
              <h1 className="amara">3594</h1>
            </div>
            <div>
              <img src={Patternicon} alt="logo" />
            </div>
            <div>
              <h3>Satisfied Client </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
