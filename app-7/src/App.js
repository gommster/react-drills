import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ todoList: [...this.state.todoList, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.todoList} />
      </div>
    );
  }
}

export default App;
