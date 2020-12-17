import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['bob','tom','show', 'YEAH TOAST']
    }
  }

  render (){
    let itemsToDisplay = this.state.array.map((element,index) => {
      return <h2 key={index}>{element}</h2>
    });

    return <div className='App'>{itemsToDisplay}</div>
  }
}

export default App;
