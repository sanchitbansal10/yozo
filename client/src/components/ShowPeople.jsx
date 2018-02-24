import React, {Component} from 'react'
import '../styles/showPeople.css'


class ShowPeople extends Component{

   
    render(){
        return(
            
<div className='showPeople'>
                <div className='elementPeople'>
                NAME:{this.props.data.firstName}
                </div>
                <div className='elementPeople'>
                email:{this.props.data.email}
                </div>
                <div className='elementPeople'>
                About:{this.props.data.about}
                </div>
                {this.props.data.joiningYear==null?null:
                <div className='elementPeople'>
                Joining Year:{this.props.data.joiningYear}
                </div>}
                {this.props.data.branch==null?null:
                <div className='elementPeople'>
                 Branch:{this.props.data.branch}
                </div>}
                <div className='elementPeople'>
                Interests:{this.props.data.interests.map((interest)=><span>{interest}</span>)}
                </div>
            </div>

        )
    }
}

export default ShowPeople