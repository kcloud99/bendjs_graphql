import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 40vh;
  border: 2px solid black;
  margin-top: 40px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    console.log(this.state.username)
    console.log(this.state.password)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleLogin(user);
    console.log(user);
  }

  render() {
    return <Wrapper>
        <h3>
          Please login or <Link to="/signup">Signup</Link>
        </h3>
        <form>
          <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} />
          <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </Wrapper>;
  }
}

export default Login;