import React, { Component } from 'react';
class UserDetails extends Component {
    state = { 
        users : []
     };

     updateButtonStyle={
         height : 30,
         width : 80,
         backgroundColor : "yellow",
         color : "red"

     }

    render() { 

        let name = this.props.value;
        let firstName = "";
        let lastName = "";
        if(name !== undefined){
            firstName = name.split(" ")[0];
            lastName = name.split(" ")[1];
        }
        
        return ( 
            <div id = "updateUsers">
                <input id = "firstName"  defaultValue = {firstName} placeholder = "Enter FirstName" type= "text"/>
                <input id = "lastName" defaultValue = {lastName} placeholder = "Enter LastName" type= "text"/>
                <button> Update </button>
            </div>
         );
    }
}
 
export default UserDetails;