import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.data.completed} />
        <p>{this.props.data.text}</p>
      </div>
    );
  }
}

export default ToDoItem;
