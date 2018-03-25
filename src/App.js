import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { addTodo, removeTodo } from './store'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  addTodo = text => this.props.addTodo(text)
  removeTodo = todo => this.props.removeTodo(todo)

  render() {
    const { todos } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h2>Welcome to React Example</h2>
        </div>
        <div className="App-intro">
          <AddTodo addTodo={this.addTodo} />
          <TodoList removeTodo={this.removeTodo} todos={todos} />
          <div>Count: {todos.length}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

const mapDispatchToProps = {
  addTodo,
  removeTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
