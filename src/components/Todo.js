import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: this.props.todo
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm() {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.editTodo(this.props.id, this.state.todo);
    this.setState({isEditing: false})
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleToggle() {
    this.props.toggleCompletion(this.props.id)
  }
  render() {
    let display;
    if (this.state.isEditing) {
      display =
        <div className='Todo'>
          <form className='Todo-edit-form'>
            <input type='text' 
              value={this.state.todo} 
              onChange={this.handleChange}
              name='todo'
            />
          </form>
          <button onClick={this.handleUpdate}>Save</button>
        </div>
    } else {
      display =
        <div className='Todo'>
          <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>{this.props.item}</li>
          <div className='Todo-buttons'>
            <button onClick={this.handleDelete}>
              <i className='fas fa-trash' />
            </button>
            <button onClick={this.toggleForm}>
              <i className='fas fa-pen' />
            </button>
          </div>
        </div>
    }

    return display
  }
}

export default Todo;