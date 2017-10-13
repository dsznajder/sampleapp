import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { addTodo, completeTodo, removeTodo } from './store';

class App extends Component {
  state = {
    todos: []
  }

  addTodo = (text) => {
    this.props.addTodo(text)
  }

  removeTodo = (todo) => {
    this.props.removeTodo(todo)
  }

  completeTodo = (todo) => {
    this.props.completeTodo(todo)
  }

  render() {
    const { todos } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro container-fluid">
          <TodoForm addTodo={this.addTodo} />
          <TodoList
            completeTodo={this.completeTodo}
            removeTodo={this.removeTodo}
            todos={todos}
          />
          <div>Count: {todos.length}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodo,
  completeTodo,
  removeTodo,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
