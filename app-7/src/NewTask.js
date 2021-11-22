import React, { Component } from "react";

class NewTask extends Component {
  render() {
    return (
      <div className="app6">
        <input
          className="input"
          onChange={(e) => this.props.userInputChange(e)}
        ></input>
        <button onClick={this.props.addBtn}>Add</button>
      </div>
    );
  }
}

export default NewTask;
