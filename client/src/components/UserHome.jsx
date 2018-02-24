import React, {Component} from 'react';
import axios from 'axios';
import Interest from './Interest';
import { Route,Link,Switch } from 'react-router-dom'

class UserHome extends Component{
    constructor(props){
        super(props);
        this.state={
            rollNo:'',
            userData:null
        }
        this.getUserData=this.getUserData.bind(this)
    }

    componentWillMount(){
        this.setState({rollNo:this.props.match.params.rollNo},
        ()=>{this.getUserData()})
    }
    getUserData(){
        console.log('get user data called')
        axios.get(`/getUserData?rollNo=${this.state.rollNo}`)
        .then((response)=>{
            console.log('we got the data')
            this.setState({userData:response.data.shift()})})
    }

    render(){
        return(
            <div>
                {this.state.userData==null?null:
                <div>{this.state.userData.interests.map((interest)=><Link to={`/exploreInterest/${interest}`}><Interest interest={interest}/></Link>)}</div>
                }
            </div>
        )
    }
}

export default UserHome