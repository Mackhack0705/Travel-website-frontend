import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/tour.css";
import tour from "../videos/tour.mp4"

const Tour = () => {
  return (
    <div className="tour-card">
      <Card style={{ width: "70rem", height: "40rem", margin: "auto" }}>
        <Row noGutters>
          <Col xs={6}>
            <video src={tour} autoPlay controls loop style={{width: "100%", height: "40rem"}}></video>
          </Col>
          <Col xs={6}>
            <Card.Body style={{paddingBlock: "5rem"}}>
              <Card.Title className="tour-title">Take a look at Tour video</Card.Title>
              <Card.Text className="tour-desc">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br /><br />
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Card.Text>
              <Button variant="warning" className="tour-button">Get Started</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Tour;
