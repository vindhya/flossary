import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Floss from './Floss';
import Col from 'react-bootstrap/Col';

const renderFloss = (listId, flossList) => {
  return flossList.map(floss => (
    <Floss data={floss} key={listId + floss._id} />
  ));
};

const FlossList = props => {
  console.log(props.data);
  return (
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {renderFloss(props.data._id, props.data.flossList)}
        </ListGroup>
      </Card>
    </Col>
  );
};

export default FlossList;
