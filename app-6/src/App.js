import React from "react";
import "./App.css";
import Todo from "./Todo";

class App extends React.Component {
  state = {
    userInput: "",
    todoList: [],
  };

  onUserInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onAdd = () => {
    const input = this.state.userInput;

    const arr = [...this.state.todoList, input];
    console.log(arr);

    this.setState({ todoList: arr });
  };

  render() {
    const list = this.state.todoList.map((item) => {
      return <h3>{item}</h3>;
    });

    return (
      <div className="app6">
        <h2>My to-do list:</h2>
        <input className="input" onChange={(e) => this.onUserInputChange(e)}></input>
        <button onClick={this.onAdd}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
