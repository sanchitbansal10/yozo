import React, { Component } from 'react';
import {  Button, Checkbox, Form, Input, Radio, Select, TextArea  } from 'semantic-ui-react';

class AddInterests extends Component{
    constructor(){
        super();
        this.state={
            interest:null
        }
    }

    handleChange(e){
        this.setState({interest:e.target.value})
    }

    handleSubmit(){
        let interest={
            interest:this.state.interest
        }
        axios.post('/submitInterest',interest)
    }
    render(){
        return(
            <Form>
                <Form.Field control={Input} placeholder='Add Interest' onChange={this.handleChange}  />
                <Form.Field control={Button} content='Submit' onClick={this.handleSubmit} />
            </Form>
        )
    }
}