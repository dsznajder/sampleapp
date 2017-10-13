import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Steps } from 'intro.js-react';

import 'intro.js/introjs.css';
import './App.css';
import logo from './logo.svg';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { addTodo, completeTodo, removeTodo, load } from './store';

const steps = [
    {
      "element": "#main",
      "intro": "Welcome in TodoApp.",
      "position": "bottom-middle-aligned"
    },
    {
      "element": "#input",
      "intro": "There you can write your todo.",
      "position": "left"
    },
    {
      "element": "#button",
      "intro": "After writing a todo, you can press `Add` or just Enter on your keyboard.",
      "position": "left"
    },
    {
      "element": "#todo",
      "intro": "When you add todo you can mark this as completed when you click on text.",
      "position": "left"
    },
    {
      "element": "#remove",
      "intro": "You can also remove todo from list here.",
      "position": "left"
    }
  ]

class App extends Component {
  state = {
    stepsEnabled: true
  }

  componentWillMount = () => {
    this.props.load()
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

  onExit = () => {
    this.setState({ stepsEnabled: false })
  }

  render() {
    const { todos } = this.props;
    const { stepsEnabled } = this.state;

    return (
      <div className="App">
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={0}
          onExit={this.onExit}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="main" className="App-intro container-fluid">
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
  load,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
