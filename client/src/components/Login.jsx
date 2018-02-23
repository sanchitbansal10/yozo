import React, {Component} from 'react';
import {  Button, Form, Input} from 'semantic-ui-react';


class Login extends Component{
    state={
        rollNo:'',
        password:'',
        submittedRollNo:'',
        submittedPassword:''
    }

    handleChange = (e, { name, value }) => { //the e,{} notation i have to see
    this.setState({ [name]: value })
    }

    handleSubmit = () => {
        const { rollNo,password,submittedPassword,submittedRollNo } = this.state

        this.setState({submittedPassword:password,submittedRollNo:rollNo })
    }

    render(){
        const {rollNo,password,submittedPassword,submittedRollNo} = this.state
        return(
            <div>
                <Form>
                    <Form.Field control={Input} placeholder='Your UserName (College Roll No)' name='rollNo' value={rollNo} onChange={this.handleChange} /> {/* bug:having no rules on password so will do it later */}
                    <Form.Field control={Input} placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                    <Form.Field control={Button} content='Submit' onClick={this.handleSubmit} />
                </Form>
            </div>
        )
    }
}

export default Login