import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Image url={'https://quotesnhumor.com/wp-content/uploads/2015/07/Top-30-Funny-Cat-Memes-Hilarious.jpg'}/>
      </div>
    );
  }
}
export default App;
