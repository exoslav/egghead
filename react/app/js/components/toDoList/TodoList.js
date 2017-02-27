import React from 'react'
import TodoStore from '../../stores/TodoStore'
import ToDoItem from './Item'

class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  render() {
    const toDoList = this.state.todos.map((item) => <ToDoItem key={item.id} data={item} />)

    return(
      <ul>
        {toDoList}
      </ul>
    )
  }
}

export default TodoList
