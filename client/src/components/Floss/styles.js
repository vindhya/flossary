import styled from 'styled-components';

export const ColouredSquare = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${props => `rgb(${props.red},${props.green},${props.blue})`};
  display: inline-block;
  margin-right: 0.5rem;
`;
