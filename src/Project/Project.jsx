import React from "react";
import "./Project.css";
import project1 from "../assets/1project.png";
import project2 from "../assets/2project.png";
import project3 from "../assets/3project.png";
import project4 from "../assets/4project.png";
import project5 from "../assets/5project.png";

export default function Project() {
  return (
    <div className="project">
      <div className="content">
        <div className="project_content">
          <div className="project_text">
            <h2>Transporting Across The World</h2>
          </div>
          <div className="project_image">
            <div className="width">
              <img src={project1} alt="logo" />
            </div>
            <div className="width">
              <img src={project2} alt="logo" />
            </div>
            <div className="width">
              <img src={project3} alt="logo" />
            </div>
            <div className="width">
              <img src={project4} alt="logo" />
            </div>
            <div className="width">
              <img src={project5} alt="logo" />
            </div>
          </div>
          <div className="btn">
            <button type="submit">More Work</button>
          </div>
        </div>
      </div>
      <div className="project_BG"></div>
    </div>
  );
}
