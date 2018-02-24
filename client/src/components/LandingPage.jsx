import React , {Component} from 'react';
import SignUpForm from './SignUpForm';
import Login from './Login';
import '../styles/landingPage.css'


class LandingPage extends Component{
    render(){
        return(
            <div className ='landing-page-comp'>
                <div className="landing-top">
                <h1>YOZO : YOUR ZONE</h1>
                <br/><h6>Association For Associations</h6></div>
                <div className="landing-left">
                    <p>
                        We at the yozo family welcomes you to the new world where <br/> 
                        you can get expertise in your field that interests you by<br/>
                         finding the people of your own interest or<br/> the people working in your interest. Unity is strength,<br/>
                        you unite with your mates and can make impossible possible
                    </p>
                </div>
                <div className="landing-right">
                    <SignUpForm />
                    <hr />
                    <strong>Already a member</strong>
                    <Login />
                </div>
            </div>
        )
    }
}

export default LandingPage