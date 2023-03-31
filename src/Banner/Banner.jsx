import React from "react";
import "./Banner.css";
// import "/assets/Photo.png";
const Banner = () => {
  return (
    <div className="banner_showcase">
      <div className="banner_context">
        <h1 className="color">Logistics & supply chain solution</h1>
        <h2 className="text">Your Gateway to any Destination in the world</h2>
        <p>
          In augue ligula,feugiat ut nulla consequat.ut est lacus,molestie in
          arcuno,iaculis vehicula ipsum.Nunc faucibus,nisi id dapibus finibus,
          enim diam interdum nulla ,sed laoreet risus lectus
        </p>
        <input type="button" class="button" value="Explore More" />
      </div>
    </div>
  );
};
export default Banner;
