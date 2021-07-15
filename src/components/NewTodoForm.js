import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodo = {...this.state, id: uuidv4(), completed: false}
    this.props.addTodo(newTodo);
    this.setState({todo: ''})
  }

  render() {
    return (
      <div className='NewTodo'>
        <form className='NewTodoForm'>
          <label hmtlFor='todo'>
            Add: 
            <input 
              id='todo'
              name='todo'
              value={this.state.todo}
              onChange={this.handleChange}
              placeholder='new tasks...'
            />
          </label>
          <button onClick={this.handleSubmit}>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm;
