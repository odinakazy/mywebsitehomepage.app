import React from "react";
import "./Blog.css";
import Blogimg from "../assets/Blogimg.png";
import Blogtext from "../assets/Blogtext.png";
import Blogdate from "../assets/Blogdate.png";
import Blogimg2 from "../assets/Blogimg2.png";
import Blogtext2 from "../assets/Blogtext2.png";
import Blogdate2 from "../assets/Blogdate2.png";
import Blogimg3 from "../assets/Blogimg3.png";
import Blogtext3 from "../assets/Blogtext3.png";
import Blogdate3 from "../assets/Blogdate3.png";
export default function Blog() {
  return (
    <div className="Blog">
      <div className="Blog_title">
        <h6>Our Blog</h6>
        <h5> Our Latest News</h5>
      </div>
      <div className="Blog_content">
        <div className="blog_one">
          <div className="blog_img">
            <img src={Blogimg} alt="logo" />
          </div>
          <div className="blog_calender">
            <img className="blogd" src={Blogdate} alt="logo" />
          </div>
          <div className="blog_text">
            <img src={Blogtext} alt="logo" />
          </div>
        </div>
        <div className="blog_one">
          <div className="blog_img">
            <img src={Blogimg2} alt="logo" />
          </div>
          <div className="blog_calender">
            <img className="blogd" src={Blogdate2} alt="logo" />
          </div>
          <div className="blog_text">
            <img src={Blogtext2} alt="logo" />
          </div>
        </div>
        <div className="blog_one">
          <div className="blog_img">
            <img src={Blogimg3} alt="logo" />
          </div>
          <div className="blog_calender">
            <img className="blogd" src={Blogdate3} alt="logo" />
          </div>
          <div className="blog_text">
            <img src={Blogtext3} alt="logo" />
          </div>
        </div>
      </div>
      <div className="button_button1">
        <button className="button_button2">More Blog</button>
      </div>
    </div>
  );
}
