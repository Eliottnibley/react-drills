import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor () {
    super() 
    this.state = {
      list: ['cheese', 'ham', 'sushi', 'ice crea', 'noodles']
    }
  }

  render() {
    let displayList = this.state.list.map((elem, ind) => {
      return <h2 key={ind}>{elem}</h2>
    })
    return <div className='App'>{displayList}</div>
  }
}

export default App;
