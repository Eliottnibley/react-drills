import React, {Component} from 'react'

export default class MagicInput extends Component {
  constructor() {
    super() 
    this.state = {
      userInput: ''
    }
  }

  render () {
    return (
      <div className='outerDiv'>
        <input className="userInput" onChange={(e) => this.setState({userInput: e.target.value})}/>
        <h4>{this.state.userInput}</h4>
      </div>
    )
  }
}