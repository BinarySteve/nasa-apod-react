import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

function Nasaphoto({ photo }) {
  const photoDate = new Date(photo.date);
  //Need to adjust date by +1 in order to get the correct date from the API
  photoDate.setDate(photoDate.getDate() + 1);

  return (
    <Card height='100%'>
      {photo.code === 404 ? (
        <h1>Enter a date above</h1>
      ) : (
        <CardBody className="shadow rounded">
          <h1 className="text-muted text-center mb-5">
            {photoDate.toDateString()}
          </h1>
          <img src={photo.url} alt={photo.title} className="img-fluid mb-3" />
          <h2 className="text-center mb-5">{photo.title}</h2>
          <CardText>{photo.explanation}</CardText>
        </CardBody>
      )}
    </Card>
  );
}

export default Nasaphoto;
