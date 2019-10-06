import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { ColouredSquare } from './styles';

const Floss = props => {
  const { flossId, description, red, blue, green } = props.data;
  console.log('floss props', props);
  return (
    <ListGroupItem className="d-flex align-items-center">
      <ColouredSquare red={red} green={green} blue={blue} />
      {flossId}: {description}
    </ListGroupItem>
  );
};

export default Floss;
