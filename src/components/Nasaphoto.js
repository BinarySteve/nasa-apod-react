import React from "react";
import { Card, CardBody, CardImg, CardText } from "reactstrap";

function Nasaphoto({ photo }) {
  const photoDate = new Date(photo.date);
  //Need to adjust date by +1 in order to get the correct date from the API
  photoDate.setDate(photoDate.getDate() + 1);

  return (
    <Card style={{ borderRadius: "25px", display: "block" }} className="shadow">
      {photo.code === 404 ? (
        <h1>Enter a date above</h1>
      ) : (
        <CardBody className="shadow rounded ">
          <h1 className="text-muted text-center mb-5">
            {photoDate.toDateString()}
          </h1>
          <CardImg
            top
            width="75%"
            style={{ borderRadius: "25px" }}
            src={photo.url}
            alt={photo.title}
            className="mx-auto mb-3"
            height="50%"
          />
          <h2 className="text-center mb-5">{photo.title}</h2>
          <CardText
            style={{ fontSize: "1rem", textAlign: "justify", overflow: "auto" }}
          >
            {photo.explanation}
          </CardText>
        </CardBody>
      )}
    </Card>
  );
}

export default Nasaphoto;
