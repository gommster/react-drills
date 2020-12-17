import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      word: '',
      array: ['bob','tom bob','show', 'YEAH TOAST']
    }
  }

  render () {
    let itemsToDisplay = this.state.array.map((element,index) => {
      if(element.includes(this.state.word))
        return <h2 key={index}>{element}</h2>
    });

    return (
      <div className='App'>
        <input onChange={e=>this.handleChange(e.target.value)} type='text'/>
        <p>{this.state.message}</p>
        <div>{itemsToDisplay}</div>
      </div>
      
    );
  }

  handleChange(str) {
    this.setState({word: str});
  }

}

export default App;
