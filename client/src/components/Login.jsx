import React, {Component} from 'react';
import {  Button, Form, Input} from 'semantic-ui-react';
import axios from 'axios'
import { Route,Link,Switch } from 'react-router-dom'


class Login extends Component{
    constructor(){
        super()
        this.state={
            rollNo:'',
            password:'',
            submittedRollNo:'',
            submittedPassword:''
        }
        this.sendUserAuthRequest=this.sendUserAuthRequest.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    

    handleChange = (e, { name, value }) => { //the e,{} notation i have to see
    this.setState({ [name]: value })
    }
    sendUserAuthRequest(){
        let userInput = {username:this.state.rollNo,password:this.state.password}
        axios.get(`/userAuth/rollNo=${this.state.rollNo}`)
        .then((response)=>{

        })
    }
    handleSubmit = () => {
        const { rollNo,password,submittedPassword,submittedRollNo } = this.state

        this.setState({submittedPassword:password,submittedRollNo:rollNo },
        ()=>{this.sendUserAuthRequest()}
        )

    }

    render(){
        const {rollNo,password,submittedPassword,submittedRollNo} = this.state
        return(
            <div>
                <Form>
                    <Form.Field control={Input} placeholder='Your UserName (College Roll No)' name='rollNo' value={rollNo} onChange={this.handleChange} /> {/* bug:having no rules on password so will do it later */}
                        <Link to={`/userHome/${this.state.rollNo}`} ><Form.Field control={Button} content='Submit' onClick={this.handleSubmit} /></Link>
                </Form>
            </div>
        )
    }
}

export default Login