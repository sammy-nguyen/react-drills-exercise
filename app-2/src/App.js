import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    array: ["apple", "lemon", "orange", "mango", "avocado", "strawberry"],
  };

  // onUserInputChange = (e) => {
  //   this.setState({ userInput: e.target.value });
  // };

  render() {
    const list = this.state.array.map((fruit) => {
      return <h2>{fruit}</h2>;
    })
    return (
      <div className= "list">
      {list}
      </div>
    );
  }
}
export default App;
