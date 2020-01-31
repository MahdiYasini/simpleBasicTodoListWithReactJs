import React, { Component } from 'react';
import './App.css';
import Todo from '../components/todo/Todo'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: '',
      todoList: [],
    };
  };

  addNewTodoListHandler = (event) => {
    event.preventDefault();
    this.setState((preventState) => {
      todoList: preventState.todoList.push(preventState.initialValue)
    });
    document.getElementById('addToDoListForm').reset();
  };

  updateValue = (event) => {
    this.setState({
      initialValue: event.target.value,
    });
  };
  render() {
    return (
      <>
        <form id="addToDoListForm" onSubmit={this.addNewTodoListHandler}>
          <input onChange={this.updateValue} placeholder="Enter new ToDo"></input>
          <br />
          <input type="submit" value="Add :)" />
        </form>
        <Todo todoList={this.state.todoList}/>
      </>
    );
  }
};
export default App;
