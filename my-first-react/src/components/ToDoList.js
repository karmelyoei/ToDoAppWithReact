import React, { Component } from 'react';
import todoData from './todoData';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: todoData };
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} data={item} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default ToDoList;
