import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anish Chandra </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently learning.
            <br />
            I have completed BCom in Business Management at R.A. Podar College of Commerce
            Economics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
