import React, { Component } from 'react';
import { Route,Link,Switch } from 'react-router-dom';

import './styles/main.css'
/* the React Component */
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import LandingPage from './components/LandingPage'
import UserHome from './components/UserHome'
import ExploreInterest from './components/ExploreInterest'
class App extends Component {
  constructor(){
    super()
    this.state={
      rollNo:''
    }
    this.setRollNo=this.setRollNo.bind(this)
  }

    setRollNo(rollNo){
      this.setState({rollNo:rollNo})
    }
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/userHome/:rollNo' render={props => <UserHome {...props}/>} />   
      <Route exact path='/userAuth' render={props => <Login setRollNo={this.setRollNo} {...props} />} />
      <Route exact path="/exploreInterest/:interest" component={ExploreInterest} />
      </div>
    );
  }
}

export default App;
