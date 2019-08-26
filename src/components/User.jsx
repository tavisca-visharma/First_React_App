import React, { Component } from "react";
import UserDetails from "./UserDetails";

class User extends Component {
    
    state = {
      viewUserDetails: false
    };

  buttonStyle = {
    height: 30,
    width: 200,
    backgroundColor: "brown",
    color: "white"
  };

  handleOnClick() {
    console.log(this);
    console.log("clicked");
    this.setState({
      viewUserDetails: !this.state.viewUserDetails
    });
  }

  getComponent() {
    if (this.state.viewUserDetails) {
      console.log("Heeeeeeloo");
      return <UserDetails/>;
    } else {
      return "";
    }
  }

  render() {
    this.handleOnClick = this.handleOnClick.bind(this);
    return (
      <React.Fragment>
        <button onClick={this.handleOnClick} style={this.buttonStyle}>
          {this.props.value}
        </button>
        {this.getComponent}
      </React.Fragment>
    );
  }
}

export default User;
