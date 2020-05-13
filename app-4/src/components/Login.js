import React, {Components, Component} from 'react'

export default class Login extends Component {
  constructor () {
    super()
      this.state = {
        userNameInput: '',
        passwordInput: ''
      }
  }

  render () {
    return (
      <div>
        <input className='userName' placeholder='Username' onChange={(e) => this.setState({userNameInput: e.target.value})}/>
        <input className='password' placeholder='Password' onChange={(e) => this.setState({passwordInput: e.target.value})}/>
        <button className='confirmationButton' onClick={() => window.alert(`Username: ${this.state.userNameInput} Password: ${this.state.passwordInput}`)}>Login</button>
      </div>
    )
  }
}