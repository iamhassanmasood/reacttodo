import React, { Component } from 'react'

export default class CreateTodo extends Component {

constructor(){
    super();
  this.state = {
        todoDescription:"",
        todoResponsible:"",
        todoPriiority:"",
        todoCompleted:false
    }
}
todoResponsibleHandler= ()=>{
  
}
  render() {
    return (
      <div>
        <p>Create Todo</p>
      </div>
    )
  }
}
