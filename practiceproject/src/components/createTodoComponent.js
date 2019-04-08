import React, { Component } from 'react'

export default class CreateTodo extends Component {

constructor(){
    super();
  this.state = {
        todoDescription:"",
        todoResponsible:"",
        todoPriority:"",
        todoCompleted:false
    }
}
todoDescriptionHandler= (event)=>{
  this.setState({
    todoDescription: event.target.value,
  })
}

todoPriorityHandler= (event)=>{
  this.setState({
    todoPriority: event.target.value,
  })
}

todoResponsibleHandler= (event)=>{
  this.setState({
    todoResponsible: event.target.value,
  })
}

  render() {
    return (
      <div>
        <p>Create Todo</p>
      </div>
    )
  }
}
