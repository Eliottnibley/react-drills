import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      list: ['ham', 'lamb', 'spaghetti', 'noodles', 'sushi', 'lettuce'],
      userInput: '',
    }
  }

  render() {
    let display = this.state.list.filter((elem) => {
      return elem.includes(this.state.userInput)
    }).map((elem, ind) => <h2 key={ind}>{elem}</h2>)
    return(
      <div className='App'>
        <input className='userinput' onChange={(e) => this.setState({userInput: e.target.value})}/>
        <div>{display}</div>
      </div>
    )
  }
}

export default App;
