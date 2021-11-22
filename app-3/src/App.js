import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    userInput: "",
    fruits: ["apple", "lemon", "orange", "mango", "avocado", "strawberry"],
  };

  onUserInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };


  render() {
    const list = this.state.fruits.filter(fruit => fruit.includes(this.state.userInput)).map((fruit) => {
      return <h2>{fruit}</h2>;
    })

    return (
      <div className="list">
        <input onChange={(e) => this.onUserInputChange(e)}></input>

        {list}
      </div>
    );
  }
}
export default App;
