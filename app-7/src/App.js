import React from 'react';
import logo from './logo.svg';
import NewTask from "./NewTask";
import List from "./List";
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

    this.setState({ todoList: arr });
  };

  render() {

    return (
      <div className="app6">
        <h2>My to-do list:</h2>
        <NewTask userInputChange={this.onUserInputChange} addBtn={this.onAdd}/>
        <List todos={this.state.todoList} />
      </div>
    );
  }
}

export default App;
