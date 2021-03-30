import logo from './to-do.svg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    todoList : []
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} alt="My logo" className="App-logo" />
          <div>
            <h1 className="h1Titel">Daily ToDo</h1>
            <form className="mb-3" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text" name="todoTask" className="form-control" placeholder=" write your Task" />
                <div className="input-group-append">
                  <Button type="submit" className="btn btn-outline-success">Add</Button>
                </div>
              </div>
           
            </form>
            <ul className="list-group">
              {
                this.state.todoList.map(
                  (item, index) => {
                    return <li className="list-group-item" key={index}>
                      
                        {item}
                      <button className="btn btn-sm btn-outline-danger float-right" onClick={(event) => { this.deleteTodoTask(event, index) }}>Delete</button>
                    </li>
                  }
                )
              }
            </ul>
          </div>
        </header>
      
      </div>
    );
  }
  handleSubmit = (event) => {
    let taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList:[...this.state.todoList, taskDesc]
      })
      event.target.reset();
    }
    event.preventDefault();
  }
  deleteTodoTask = (event, index) => {
    let arrayTask = [...this.state.todoList]
    arrayTask.splice(index, 1)
    this.setState({todoList:arrayTask})
  }
  
}



export default App;
