import React, { Component } from 'react'

export default class CreateTodo extends Component {

  constructor() {
    super();

    this.todoDescriptionHandler = this.todoDescriptionHandler.bind(this);
    this.todoResponsibleHandler = this.todoResponsibleHandler.bind(this);
    this.todoPriorityHandler = this.todoPriorityHandler.bind(this);
    this.onSubmitTodo = this.onSubmitTodo.bind(this);
    this.state = ({
      todoDescription: "",
      todoResponsible: "",
      todoPriority: "",
      todoCompleted: false
    })
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

    console.log("Form Submitted");
    console.log(`ToDo Description ${this.state.todoDescription}`);
    console.log(`ToDo Responsible ${this.state.todoResponsible}`);
    console.log(`ToDo Priority ${this.state.todoPriority}`);
    console.log(`ToDo Completed ${this.state.todoCompleted}`);

    this.setState({
      todoDescription: "",
      todoResponsible: "",
      todoPriority: "",
      todoCompleted: false
    })
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
          <div className="form-group">
            <label>Responsible: </label>
            <input
              className="form-check-input"
              type="text"
              className="form-control"
              value={this.state.todoResponsible}
              onChange={this.todoResponsibleHandler}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="low"
                value="low"
                checked={this.state.todoPriority === "low"}
                onChange={this.todoPriorityHandler}
              />
              <label> Low </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="medium"
                value="medium"
                checked={this.state.todoPriority === "medium"}
                onChange={this.todoPriorityHandler}
              />
              <label> Medium </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="high"
                value="high"
                checked={this.state.todoPriority === "high"}
                onChange={this.todoPriorityHandler}
              />
              <label> High </label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create ToDo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
