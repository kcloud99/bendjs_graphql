import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import MyDay from './MyDay.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const Title = props => <h1>GraphQL Workout App</h1>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center;
  width: 100vw;
  height: 100vh;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.hanldeSignup = this.handleSignup.bind(this);
  }

  handleLogin(user) {
    console.log('user', user);
  }
  handleSignup(user) {
    console.log('user', user);
  }

  render() {
    const loggedIn = this.state.user ?
    (<Route exact path="/" component={() => <MyDay />} />)
    :
    (<Route exact path="/" component={() => <Login handleLogin={this.handleLogin} />} />);

    const displayNav = this.state.user ?
      (<Route path="/" component={() => <Navbar />} />)
      :
      (<Route path="/" component={() => <Title />} />);

    return <BrowserRouter>
        <Wrapper>
          {displayNav}
          {/* {loggedIn} */}
        <Route exact path="/" component={() => <MyDay />} />
        <Route path="/login" component={() => <Login handleLogin={this.handleLogin} />} />
        <Route path="/signup" component={() => <Signup handleSignup={this.handleSignup} />} />
        </Wrapper>
      </BrowserRouter>;
  }
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));