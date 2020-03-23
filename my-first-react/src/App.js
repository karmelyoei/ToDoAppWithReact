import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import AddTask from './components/AddTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTask />
        <ToDoList />
      </div>
    );
  }
}

export default App;
