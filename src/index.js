import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import UserLists from "./components/UserLists.jsx";
import UserDetails from "./components/UserDetails.jsx";

// let element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));
class Main extends Component {

    render() {
        return (
            <div id="main">
                <App />
                <UserLists />
                {/* <UserDetails /> */}
            </div>
        );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
