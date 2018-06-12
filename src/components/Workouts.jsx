import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vh;
  border: 2px solid black;
`;

const Workouts = props => <Wrapper>"This is the Workouts component"</Wrapper>;

export default Workouts;
