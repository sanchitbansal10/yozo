import React, {Component} from 'react';
import axios from 'axios';
import ShowPeople from './ShowPeople'
import '../styles/exploreInterest.css'

class ExploreInterest extends Component{


    constructor(){
        super();
        this.state={
            data:null
        }
    }

    componentWillMount(){
        axios.get(`/exploreInterest?interest=${this.props.match.params.interest}`)
        .then((response)=>{
            this.setState({data:response.data})
        })
    }

    render(){
        return(
            <div>
               { this.state.data==null?null:
               <div className='displayFlex'>{ this.state.data.map((people)=><ShowPeople  data = {people} />)}</div>
               }
            </div>
        )
    }
}

export default ExploreInterest