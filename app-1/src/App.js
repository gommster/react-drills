import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      message: ''
    };
  }
  render () {
    return (
      <div className="App">
        <input onChange={e=>this.handleChange(e.target.value)} type='text'/>
        <p>{this.state.message}</p>
      </div>
    );
  }

  handleChange(str) {
    this.setState({message: str})
  }
}
