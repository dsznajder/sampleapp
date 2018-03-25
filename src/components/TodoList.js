import React, { Component } from 'react'

export default class TodoList extends Component {
  removeTodo = todo => () => this.props.removeTodo(todo)

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <a onClick={this.removeTodo(todo)}> X </a>
          </li>
        ))}
      </ul>
    )
  }
}
