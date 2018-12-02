import React, { Component } from 'react';
import Login from './components/userlogin/loginForm';
import Register from './components/userregistration/userRegistration';
import './App.css';


class App extends Component {


  render() {

    return (
      <div className="App">
        <Register/>

        <Login/>

      </div>
    );
  }
}

export default App;
