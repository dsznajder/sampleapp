import React, { Component } from 'react';

export default class TodoForm extends Component {
  state = {
    value: '',
  }

  updateValue = ({ target: { value } }) => this.setState({ value })

  handleSubmit = (event) => {
    if (event.key === "Enter") {
      this.addTodo();
    }
  }

  addTodo = () => {
    const { value } = this.state;

    if (value) {
      this.props.addTodo(value)
      this.setState({ value: '' });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className="row justify-content-center mt-3">
        <div>
          <input value={value} onKeyPress={this.handleSubmit} onChange={this.updateValue} />
        </div>
        <div>
          <button className="btn btn-success" disabled={!value} onClick={this.addTodo}>Add</button>
        </div>
      </div>
    );
  }
}
