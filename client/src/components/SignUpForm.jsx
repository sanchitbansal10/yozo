import React, { Component } from 'react'
import {  Button, Checkbox, Form, Input, Radio, Select, TextArea  } from 'semantic-ui-react';
import axios from 'axios'
//all variable camel casing


class SignUpForm extends Component {
    constructor(){
        super()
        this.state = { 
            firstName: '',
            lastName:'',
            branch:'',
            joiningYear:'',
            about:'',
            email: '',
            rollNo:'',
            password:'',
            submittedPassword:'',
            submittedFirstName: '',
            submittedLastName: '',
            submittedBranch:'',
            submittedJoiningYear:'',
            submittedRollNo:'',
            submittedEmail: '' ,
            submittedAbout:''
        }
        this.sendPostRequest=this.sendPostRequest.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    


    handleChange = (e, { name, value }) => { //the e,{} notation i have to see
        this.setState({ [name]: value })
    }//a nice way to have controlled react form components as compared to what u have done in 100DaysOfCodeManager

    handleBranch(e){
        this.setState({branch:e.target.value})
    }

    handleJoinYear(e){
        this.setState({joiningYear:e.target.value})
    }

    sendPostRequest(){
        let userData={
            firstName:this.state.submittedFirstName,
            lastName:this.state.submittedLastName,
            rollNo:this.state.submittedRollNo,
            password:this.state.submittedPassword,
            about:this.state.submittedAbout,
            branch:this.state.submittedBranch,
            joiningYear:this.state.submittedJoiningYear,
            email:this.state.submittedEmail,
            interests:[],  //leaving the interest stuff
        }
        axios.post('/submitNewUser',userData) 
      }

    handleSubmit = () => {
        const { firstName,lastName, email,rollNo,joiningYear,branch,password,about } = this.state
        this.setState({
            submittedFirstName: firstName,
            submittedLastName: lastName,
            submittedEmail: email,
            submittedPassword:password,
            submittedBranch:branch,
            submittedJoiningYear:joiningYear,
            submittedRollNo:rollNo,
            submittedAbout:about },
            ()=>{this.sendPostRequest()}
        )
    }


    render() {
      const { firstName,lastName,about, password,submittedPassword,email,branch,joiningYear,rollNo,submittedRollNo, submittedFirstName,submittedLastName,submittedBranch ,submittedEmail } = this.state
  
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
                <Form.Field control={Input} placeholder='Your First Name' name='firstName' value={firstName} onChange={this.handleChange} />
                <Form.Field control={Input} placeholder='Your Last Name' name='lastName' value={lastName} onChange={this.handleChange} />
                <Form.Field control={Input} placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                <Form.Field control={Input} placeholder='Roll Number' name='rollNo' value={rollNo} onChange={this.handleChange} />
                <Form.Field  value={branch} control='select' onChange={this.handleBranch.bind(this)}> {/*  bug:by default its biotech and that too not in state and if you dont select any other branch it does not update the state */}
                        <option value='bio'>Biotech</option>
                        <option value='cse'>CSE</option>
                        <option value='ece'>ECE</option>
                        <option value='eee'>EEE</option>
                        <option value='it'>IT</option>
                        <option value='mechanical'>MECHANICAL</option>
                </Form.Field>
                <Form.Field label='Joining Year' value={joiningYear} control='select' onChange={this.handleJoinYear.bind(this)}>
                        <option value='2013'>2013</option>
                        <option value='2014'>2014</option>
                        <option value='2015'>2015</option>
                        <option value='2016'>2016</option>
                        <option value='2017'>2017</option>
                        <option value='2018'>2018</option>
                </Form.Field>
                <Form.Field control={TextArea} name='about' value={about}rows='5' placeholder='Tell us something about you...keep it short and simple<-_->' onChange={this.handleChange} />
                <Form.Field control={Input} placeholder='Password' name='password' value={password} onChange={this.handleChange} /> {/* bug:having no rules on password so will do it later */}
                <Form.Group>
                <Form.Field control={Button} content='Submit' onClick={this.handleSubmit} />
                </Form.Group> 
          </Form> {/* haven't applied any verification logic for the rollno,email etc */}
        </div>
      ) 
    }
  }

export default SignUpForm;