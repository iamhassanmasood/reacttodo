import React, { Component } from 'react'

export default class CreateTodo extends Component {

  constructor() {
    super();

    this.todoDescriptionHandler = this.todoDescriptionHandler.bind(this);
    this.todoResponsibleHandler = this.todoResponsibleHandler.bind(this);
    this.todoPriorityHandler = this.todoPriorityHandler.bind(this);
    this.onSubmitTodo = this.onSubmitTodo.bind(this);
    this.state = {
      todoDescription: "",
      todoResponsible: "",
      todoPriority: "",
      todoCompleted: false
    }
  }
  todoDescriptionHandler = (event) => {
    this.setState({
      todoDescription: event.target.value,
    })
  }

  todoPriorityHandler = (event) => {
    this.setState({
      todoPriority: event.target.value,
    })
  }

  todoResponsibleHandler = (event) => {
    this.setState({
      todoResponsible: event.target.value,
    })
  }

  onSubmitTodo = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New ToDo</h3>
        <form onSubmit={this.onSubmitTodo}>
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-check-input"
              type="text"
              className="form-control"
              value={this.state.todoDescription}
              onChange={this.todoDescriptionHandler}
            />
          </div>

        </form>
      </div>
    )
  }
}
