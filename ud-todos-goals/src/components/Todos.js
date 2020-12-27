import React from 'react'
import { 
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo, 
} from '../actions/todos'
import { connect } from 'react-redux'
import List from './List'

class Todos extends React.Component {
  state = {
    name: ""
  }

  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(
      this.state.name, 
      () => this.setState({ name: ""})
      )
    )
  }

  removeTodo = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleTodo = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input 
          type="text" 
          placeholder="Add Todo" 
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List 
          items={this.props.todos} 
          removeItem={this.removeTodo}
          toggle={this.toggleTodo}
        />  
      </div>
    )
  }
}

const ConnectedTodos = connect((state) => ({
  todos: state.todos
}))(Todos)

export default ConnectedTodos