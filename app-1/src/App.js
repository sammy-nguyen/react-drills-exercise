import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    userInput: "",
  };

  onUserInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div className= "textbox">
        <input onChange={(e) => this.onUserInputChange(e)}></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}
export default App;
