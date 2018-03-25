import React, { Component } from 'react'

export default class TodoAdd extends Component {
  state = {}

  updateValue = ({ target: { value } }) => this.setState({ value })

  addTodo = () => {
    const { value } = this.state
    value && this.props.addTodo(value)
    this.setState({ value: '' })
  }

  onEnter = ({ key }) => key === 'Enter' && this.addTodo()

  render() {
    return (
      <div>
        <input onChange={this.updateValue} onKeyDown={this.onEnter} value={this.state.value} />
        <button disabled={!this.state.value} onClick={this.addTodo}>
          Add
        </button>
      </div>
    )
  }
}
