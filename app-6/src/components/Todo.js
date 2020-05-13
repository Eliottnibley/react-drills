import React, {Component} from 'react'

export default class Todo extends Component {
  render() {
    return(
      this.props.updatedList.map((elem, ind) => <h3 key={ind}>{elem}</h3>)
    )
  }
}