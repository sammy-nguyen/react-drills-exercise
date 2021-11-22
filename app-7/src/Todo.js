import React from "react";

class Todo extends React.Component {
  render() {
    return <h3>{this.props.item}</h3>;
  }
}

export default Todo;
