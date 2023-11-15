import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "../style/offer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Offer = (props) => {
  return (
    <div>
      <Card className="offerCard-container">
        <Row className="row-style">
          <Col xs={7} className="col-style">
            <Card.Img variant="left" src={props.imgsrc} style={{ height: "100%" }} />
            <Card.Title className="offer-title">{props.title}</Card.Title>
          </Col>
          <Col xs={5} className="col-style">
            <Card.Body variant="right">
              <Card.Text className="offer-price"><span>{props.price}</span> per night</Card.Text>
              <Card.Text className="offer-desc">{props.desc}</Card.Text>
              <Button variant="warning" style={{ color: "#ffff" }}>Book now</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Offer;
