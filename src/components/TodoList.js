import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []}
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(item) {
    this.setState({
      todos: [...this.state.todos, item]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  editTodo(id, newItem) {
    let updatedTodos = this.state.todos.map(item => {
      if(item.id === id) {
        return {...item, todo: newItem}
      }
      return item;
    })
    this.setState({todos: updatedTodos})
  }

  toggleCompletion(id) {
    let updatedTodos = this.state.todos.map(item => {
      if(item.id === id) {
        return {...item, completed: !item.completed}
      }
      return item;
    })
    this.setState({todos: updatedTodos})
  }

  render() {
    let todo = this.state.todos.map(todo => {
      return <Todo 
        className='TodoList_item'
        item={todo.todo}
        key={todo.id}
        id={todo.id}
        todo={todo.todo}
        completed={todo.completed}
        removeTodo={this.removeTodo}
        editTodo={this.editTodo}
        toggleCompletion={this.toggleCompletion}
      />
    })
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <ul>{todo}</ul>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default TodoList;