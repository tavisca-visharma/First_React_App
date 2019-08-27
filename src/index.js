import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import UserLists from "./components/UserLists.jsx";
import UserDetails from "./components/UserDetails.jsx";

// let element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));
class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            index: null,
            users : ["Vishal Sharma" , "Tim Cook"]
        }
    }

    updateName(firstName, lastName, index){
        let data = this.state.users;
        data[index] = firstName + " " + lastName;
        this.setState({
            users: data
        });
     }

    handleClick(value, index){
        console.log(value)
        this.setState({
            index: index
        })
    }
    render() {
        return (
            <div id="main">
                <App />
                <UserLists users={this.state.users} handleClick={this.handleClick.bind(this)} />
                <UserDetails users={this.state.users} updateName={this.updateName.bind(this)} index={this.state.index} />
            </div>
        );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
