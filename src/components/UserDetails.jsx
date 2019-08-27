import React, { Component } from 'react';
class UserDetails extends Component {

    constructor(props){
        super(props);
        this.index = null;
        this.counter = 0;
        this.state = {
            "firstName" : "",
            "lastName" : ""
        }
    }

    componentDidUpdate(){

        if(this.props.index !== null && this.counter < 1){
            this.setState({
                firstName : this.props.users[this.props.index].split(" ")[0],
                lastName: this.props.users[this.props.index].split(" ")[1]
            });
            this.counter++;
            console.log(this.state)
            
        }
        if(this.index !== this.props.index && this.counter >= 1){
            this.index = this.props.index;
            
           this.counter = 0;
            this.forceUpdate();
        }
        
    }

    firstNameUpdate(value){
        console.log(value)
        this.setState({
            firstName : value
        })
    }
    
    lastNameUpdate(value){
        this.setState({
            lastName : value        
        })
    }

    componentWillReceiveProps(){
        console.log(this.props.users, this.props.index);
        // if(this.props.index != null){
        //     this.setState({
        //         firstName: this.props.users[this.props.index].split(" ")[0],
        //         lastName: this.props.users[this.props.index].split(" ")[1]
        //     })
        // }
    }
    updateButtonStyle = {
        height: 30,
        width: 80,
        backgroundColor: "yellow",
        color: "red"

    }

    showInputs(){
        return (
                <div id="updateUsers">
                    <input id="firstName" onChange={(e) => this.firstNameUpdate(e.target.value)}  value= {this.state.firstName} placeholder="Enter FirstName" type="text" />
                    <input id="lastName"  onChange={(e) => this.lastNameUpdate(e.target.value)} value= {this.state.lastName} placeholder="Enter LastName" type="text" />
                    <button onClick={() => this.props.updateName(document.getElementById("firstName").value
                        , document.getElementById("lastName").value, this.props.index
                    )}> Update </button>
                </div>
        )
    }

    render() {
        if (this.props.index !== null) {
            return (
                this.showInputs()
            );
        }
        else {
            return null;
        }

    }
}

export default UserDetails;