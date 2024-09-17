import React, { Component } from "react";

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

  handleOnClick(value, index) {
    console.log(this);
    console.log(value);
    console.log(index);
    this.props.handleClick(value, index);
  }

  // getComponent() {
  //   if (this.state.viewUserDetails) {
  //     console.log("Heeeeeeloo");
  //     return <UserDetails/>;
  //   } else {
  //     return "";
  //   }
  // }

  render() {
    // this.handleOnClick = this.handleOnClick.bind(this);
    return (
      <React.Fragment>
        <button onClick={() => this.handleOnClick(this.props.value, this.props.index)} style={this.buttonStyle}>
          {this.props.value}
        </button>
        {this.getComponent}
      </React.Fragment>
    );
  }
}

export default User;
