import React from "react";



class List extends React.Component {
render() {
    const list = this.props.todos.map((item) => {
      return <h3>{item}</h3>;
    });

    return<div>{list}</div>

}
}
export default List;
