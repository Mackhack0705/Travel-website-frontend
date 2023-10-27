import React from "react";
import Card from "react-bootstrap/Card";
import "../style/big-feature.css";

const BigFeature = (props) => {
  return (
    <div>
      <Card style={{ width: "17rem", height: "25rem" }}>
        <Card.Img variant="top" src={props.imgsrc} className="card-img" />
        <Card.Body>
          <div className="card-title fl">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
          </div>
          <Card.Text>{props.duration}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BigFeature;
