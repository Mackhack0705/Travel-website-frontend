import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "../style/offer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Offer = (props) => {
  return (
    <div>
      <Card style={{ width: "35rem", height: "18rem" }}>
        <Row noGutters>
          <Col xs={7}>
            <Card.Img variant="left" src={props.imgsrc} style={{height: "17.9rem"}}/>
              <Card.Title className="offer-title">{props.title}</Card.Title>
          </Col>
          <Col xs={5}>
            <Card.Body variant="right">
              <Card.Text><span className="offer-price">{props.price}</span> per night</Card.Text>
              <Card.Text></Card.Text>
              <Card.Text className="offer-desc">{props.desc}</Card.Text>
              <Button variant="warning" style={{color: "#ffff"}}>Book now</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Offer;
