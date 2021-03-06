import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Todo = props => (
  <tr>
      <td>{props.todo.todoCompleted ? "completed" : ""}</td>
      <td>{props.todo.todoResponsible ? "completed" : ""}</td>
      <td>{props.todo.todoPriority ? "completed" : ""}</td>
      <td>
          <Link to={"/edit/"+props.todo._id}>Edit</Link>
      </td>
  </tr>
)

export default class TodoList extends Component {

  constructor(props) {
      super(props);
      this.state = {todos: []};
  }

  componentDidMount() {
      axios.get('http://localhost:4000/todos/')
          .then(response => {
              this.setState({todos: response.data});
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  todoList() {
      return this.state.todos.map(function(currentTodo, i) {
          return <Todo todo={currentTodo} key={i} />;
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-stripped" style={{marginTop:20}}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Action</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    )
  }
}
