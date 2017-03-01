import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher'

class Store extends EventEmitter {
  constructor() {
    super()

    this.list = [
      {
        id: 78942,
        name: 'Běhat',
        content: 'To run, running',
        wordType: 2
      },
      {
        id: 8762,
        name: 'Vařit',
        content: 'To cook, cooking',
        wordType: 2
      },
      {
        id: 467818,
        name: 'Jíst',
        content: 'to eat, eating',
        wordType: 2
      }
    ]
  }

  getAll() {
    return this.list

    this.emit('change')
  }

  addFeaturedItem(data) {
    this.list.push({
      id: Date.now(),
      name: data.name,
      content: data.content,
      wordType: 2
    })

    this.emit('change')
  }

  deleteFeaturedItem(id) {
    const list = this.list
    for(let i = 0; i < list.length; i++) {
      if(list[i].id === parseInt(id))
        list.splice(i, 1)
    }

    this.emit('change')
  }

  handleActions(action) {
    switch (action.actionType) {
      case 'ADD_FEATURED_ITEM':
        this.addFeaturedItem(action.data)
        break;
      default:
      case 'DELETE_FEATURED_ITEM':
        this.deleteFeaturedItem(action.id)
        break;
    }
  }
}

const FeaturedList = new Store

Dispatcher.register(FeaturedList.handleActions.bind(FeaturedList))

export default FeaturedList
