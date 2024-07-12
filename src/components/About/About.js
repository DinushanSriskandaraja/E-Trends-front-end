import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import "./About.css";

const About = () => {
  return (
    <div className="page">
      <h1> About Us </h1>{" "}
      <div className="content">
        <div className="left-column">
          <p>
            We are dedicated to enhancing the lives of people with disabilities
            by providing a comprehensive range of products and services that
            promote independence and improve daily living.{" "}
          </p>{" "}
          <p>
            Our mission is to ensure accessibility for all, offering solutions
            that cater to diverse needs, from mobility aids and assistive
            devices to customized home modifications and innovative
            technological solutions.{" "}
          </p>{" "}
          <blockquote className="quote">
            "Empowering independence through accessibility."{" "}
          </blockquote>{" "}
        </div>{" "}
        <div className="right-column">
          <AiOutlineUser className="icon" />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default About;
