import React, { Component } from 'react';

import './App.css';

/* the React Component */
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SignUpForm />
       <Login />
      </div>
    );
  }
}

export default App;
