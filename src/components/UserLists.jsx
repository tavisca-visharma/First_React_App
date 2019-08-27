import React, { Component } from 'react';
import User from "./User.jsx";


class UserLists extends Component {
    constructor(props){
        super(props);
        this.state = { 
         };
    }
    

     ulStyle = {
         paddingTop :20,
         paddingBottom :20,
         width : 250,
         border : "red",
         backgroundColor : "pink"
     }

     

     handleClick(value,index){
         
        console.log("parent-" + index);
        this.props.handleClick(value,index)
        // ReactDOM.render(<UserDetails index = {value} />);
     }

    

    render() { 
        return ( 
            <ul style = {this.ulStyle}>
                {this.props.users.map((users,index) => <li key = {users}> <User index={index} value = {users} handleClick={this.handleClick.bind(this)}/> </li>)}
            </ul>
         );
    }
}
 
export default UserLists;