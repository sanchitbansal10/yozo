import React, { Component } from 'react';
import '../styles/Interest.css'
class Interest extends Component{
   
   
    render(){
        return(
            <div>
               <div className='interest'>{this.props.interest}</div>
            </div>
        )
    }
}

export default Interest