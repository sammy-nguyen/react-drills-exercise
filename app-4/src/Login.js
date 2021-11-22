import React from "react";
import "./App.css";

class Login extends React.Component {
  state = {
    username:"",
    password:"",
  };

  onUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  onUserPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onConfirm = () => {
    alert(`Username : ${this.state.username}   Password: ${this.state.password} `)
  };

  render() {
    return (
      <div className="div4">
        <input className="input4" onChange={(e) => this.onUserName(e)}></input>

        <input
          onChange={(e) => this.onUserPassword(e)}
          className="input5"
        ></input>

        <button className="btn4" onClick={this.onConfirm}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
