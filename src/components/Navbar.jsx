import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid black;
  color: white;
`;

const Navbar = (props) => {

  const logInStyle = {
    textDecoration: 'none'
  }
  return (
    <Wrapper>
        <div>
          <Link to="/" style={logInStyle}>My Day</Link>
        </div>
        <div>
          <Link to="/exercises" style={logInStyle}>Exercises</Link>
        </div>
        <div>
          <Link to="/workouts" style={logInStyle}>Workouts</Link>
        </div>
        <div>
          <Link to="/food" style={logInStyle}>Food</Link>
        </div>
    </Wrapper>
    );
}

export default Navbar;