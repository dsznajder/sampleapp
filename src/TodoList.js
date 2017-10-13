import React, { Component } from 'react';

export default class TodoList extends Component {
  completeTodo = (todo) => () => this.props.completeTodo(todo);
  removeTodo = (todo) => () => this.props.removeTodo(todo);

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <li key={index}>
            <div>
              <a className={todo.completed ? 'done' : ''} onClick={this.completeTodo(todo)}>
                {todo.text}
              </a>

              <a onClick={this.removeTodo(todo)}> X </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
