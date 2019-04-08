import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoList from './components/todoComponent'
import EditTodo from './components/editTodoComponent'
import CreateTodo from './components/createTodoComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className='navbar navbar-expand-lg navbar-light bg-light' >
            <Link to="/" className="navbar-brand">MERN Stack TODO </Link>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todos</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
