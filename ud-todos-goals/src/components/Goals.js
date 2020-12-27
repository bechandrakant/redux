import React from 'react'
import { connect } from 'react-redux'
import {
  handleAddGoal,
  handleDeleteGoal,
} from '../actions/goals'
import List from './List'

class Goals extends React.Component {
  state = { name: "" }

  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(
      handleAddGoal(
        this.state.name, 
        () => this.setState({ name: ""})
      ));
  }

  removeGoal = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input 
          type="text"
          placeholder="Add Goal"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value})}
        />
        <button onClick={this.addItem}> Add Goal</button>
        <List 
          items={this.props.goals}
          removeItem={this.removeGoal}
        />  
      </div>
    )
  }
}

const ConnectedGoals = connect((state) => ({
  goals: state.goals
}))(Goals)

export default ConnectedGoals