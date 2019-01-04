import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#ccc',
      padding: '10px',
      borderBottom: '1px #eee dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  markComplete = e => {
    console.log(this.props)
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          { title }

          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  display: 'inline-block',
  height: '25px',
  width: '25px',
  background: 'red',
  color: 'white',
  lineHeight: '25px',
  borderRadius: '50%',
  float: 'right',
  cursor: 'pointer',
}

export default TodoItem
