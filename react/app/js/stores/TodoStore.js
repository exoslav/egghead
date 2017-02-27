import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher'

class Store extends EventEmitter {
  constructor() {
    super()

    this.todos = [
      {
        id: 6541864,
        name: 'Sportovat',
        content: 'Hrat fotbal a plavat'
      },
      {
        id: 45684655,
        name: 'Nakoupit',
        content: 'Jidlo a veci do prace a skoly'
      }
    ]
  }

  createToDoItem(text) {
    const { name, content } = text

    this.todos.push({
      id: Date.now(),
      name,
      content
    })

    this.emit('change')
  }

  getAll() {
    return this.todos
  }

  handleActions(action) {
    console.log('TodoStore received and acation', action)

    switch (action.type) {
      case 'CREATE_TODO_ITEM':
        this.createToDoItem(action.text)
        break;
      default:

    }
  }
}

const TodoStore = new Store

export default TodoStore
