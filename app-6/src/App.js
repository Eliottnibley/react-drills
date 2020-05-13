import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor () {
    super() 
    this.state = {
      userInput: '',
      list: []
    }
    this.update = this.update.bind(this)
  }

  update() {
    let newList = this.state.list.slice()
    newList.push(this.state.userInput)
    this.setState({list: newList,
    userInput: ''})
  }

  render() {
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <input className='userInput' placeholder='Add new task' onChange={(e) => this.setState({userInput: e.target.value})}/>
        <button className='confirmationButton' onClick={() => this.update()}>Add</button>
        <Todo updatedList={this.state.list}/>
      </div>
    )
  }
}

export default App;
