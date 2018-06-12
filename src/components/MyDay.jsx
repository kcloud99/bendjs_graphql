import React, { Component } from "react";
import styled from "styled-components";

import Workouts from './Workouts.jsx';
import Weight from './Weight.jsx';

const Title = (props) => <h2>The date is {props.date}</h2>;

const Wrapper = styled.div`
  ${'' /* display: flex;
  justify-content: center;
  align-items: center; */}
  width: 100vw;
  height: 100vh;
  ${'' /* border: 2px solid black; */}
`;

class MyDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(e) {
    let newDate = e.target.value;
    // newDate = new Date(newDate).toLocaleDateString();
    this.setState({
      date: newDate
    });
    // console.log(this.state.username);
    // console.log(this.state.password);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(new Date(this.state.date).toLocaleDateString());
  }

  render() {

    return <Wrapper>
        <h1>Date: {this.state.date}</h1>
        Choose Date: <input type="date" name="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" value={this.state.date} onChange={this.handleDateChange} />
        <button type="submit" onClick={this.handleSubmit}>GO!!!</button>
        <Workouts />
      </Wrapper>;
  }
}

export default MyDay;