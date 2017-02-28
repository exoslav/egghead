import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher'

class Store extends EventEmitter {
  constructor() {
    super()

    this.wordList = [
      {
        id: 6541864,
        name: 'Sportovat',
        content: 'Hrat fotbal a plavat',
        wordType: 1,
        learned: true
      },
      {
        id: 45684655,
        name: 'Nakoupit',
        content: 'Jidlo a veci do prace a skoly',
        wordType: 2,
        learned: false
      }
    ]

    this.totalLearned = (() => {
      let total = 0
      const list = this.wordList

      for (let i = 0; i < this.wordList.length; i++) {
        if(list[i].learned)
          total++
      }

      return total
    })()
    this.total = this.wordList.length
  }

  getTotalLearned() {
    return this.totalLearned
  }

  getTotal() {
    return this.total
  }

  getAll() {
    return this.wordList
  }

  updateState(opts) {
    if(opts.addItem)
      this.total++
    else
      this.total--

    if(!opts.isLearned)
      this.totalLearned--
  }

  addItem(data) {
    const { name, content } = data

    this.wordList.push({
      id: Date.now(),
      name,
      content
    })

    this.updateState({
      addItem: true,
      deleteItem: false,
      isLearned: false
    })

    this.emit('change')
  }

  deleteItem(id) {
    let learned
    const list = this.wordList

    for(let i = 0; i < list.length; i++) {
      if(list[i].id === parseInt(id)) {
        learned = list[i].learned ? true : false

        list.splice(i, 1)
      }
    }

    this.updateState({
      addItem: false,
      deleteItem: true,
      isLearned: learned
    })

    this.emit('change')
  }

  handleActions(action) {
    switch (action.actionType) {
      case 'CREATE_TODO_ITEM':
        this.addItem(action.data)
        break;
      case 'DELETE_TODO_ITEM':
        this.deleteItem(action.id)
        break;
      default:
    }
  }
}

const WordListStore = new Store

Dispatcher.register(WordListStore.handleActions.bind(WordListStore))

export default WordListStore
