import React from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import ProfilePic from "../images/profile.jpg";
import "../styles/DeveloperPanel.css";
function DeveloperPanel() {
  return (
    <section>
      <Container className="developer-container">
        <Col xm={6} sm={6} md={6} lg={4} className="developer-box">
          <h3 className="text-center developer-header">MEET THE DEVELOPER</h3>
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <img
              src={ProfilePic}
              alt="Developer Profile"
              style={{ width: "150px", borderRadius: "50%", margin: "0.5rem" }}
            />
          </div>
          <h4 className="developer-sub-headings text-center">
            Personal Details
          </h4>
          <ListGroup>
            <ListGroup.Item>Name: Mduduzi Blessing Zulu</ListGroup.Item>
            <ListGroup.Item>Email: mrmbzulu@gmail.com</ListGroup.Item>
            <ListGroup.Item>Contact No: 064 611 1390</ListGroup.Item>
          </ListGroup>
          <h4 className="developer-sub-headings text-center">Socials</h4>
          <ListGroup>
            <ListGroup.Item>
              <a href="https://www.linkedin.com/in/mduduzi-blessing-zulu-215ab9107/" className="social-link">Connect on LinkedIn</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://web.facebook.com/mduduziblessing.zulu" className="social-link">Connect on Facebook</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://twitter.com/mrmbzulu" className="social-link">Connect on X</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://github.com/talk-tech" className="social-link">View Profile on Github</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Container>
    </section>
  );
}

export default DeveloperPanel;
