import React from "react";
import "./Team.css";
import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2.png";
import Team3 from "../assets/Team3.png";
export default function Team() {
  return (
    <div className="team_container">
      <h6>The Transporter</h6>
      <h3>Meet Expert Team</h3>
      <div className="team_image">
        <div className="pic">
          <img src={Team1} alt="logo" />
        </div>
        <div className="pic">
          <img src={Team2} alt="logo" />
        </div>
        <div className="pic">
          <img src={Team3} alt="logo" />
        </div>
      </div>
    </div>
  );
}
