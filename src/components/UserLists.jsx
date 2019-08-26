import React, { Component } from 'react';
import User from "./User.jsx";

class UserLists extends Component {
    state = { 
        users : ["Vishal Sharma" , "Tim Cook"]
     };

     ulStyle = {
         paddingTop :20,
         paddingBottom :20,
         width : 250,
         border : "red",
         backgroundColor : "pink"
     }

    render() { 
        return ( 
            <ul style = {this.ulStyle}>
                {this.state.users.map( users => <li key = {users}> <User value = {users}/> </li>)}
            </ul>
         );
    }
}
 
export default UserLists;