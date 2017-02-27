import React from 'react'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)

    const { name, content } = this.props.data

    this.name = name
    this.content = content
  }

  render() {
    return(
      <li class="to-do-list-item">
        <h3>{this.name}</h3>
        <span>{this.content}</span>
      </li>
    )
  }
}

export default ToDoItem
