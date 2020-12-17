import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      inputText: ''
    };

    this.addItem = this.addItem.bind(this);
  }

  updateInput(str) {this.setState({inputText: str})}

  addItem() {
    this.setState( {
      todoList: [...this.state.todoList, this.state.inputText],
      inputText: ''
    } );
  }

  render () {
  let theList = this.state.todoList.map((element, index) => {return <Todo key={index} task={element} />;});

    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <div>
          <input value={this.state.inputText} onChange={e=>this.updateInput(e.target.value)} placeholder='Enter a new task!'/>
          <button onClick={this.addItem}>Add</button>
        </div>
        <br/>
        {theList}
      </div>
    )
  }
}

export default App;
