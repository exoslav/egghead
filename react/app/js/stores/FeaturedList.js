import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher'
import featured from '../test-data/featured'

class Store extends EventEmitter {
  constructor() {
    super()

    this.featuredList = featured
  }

  getAll(lang) {
    return this.featuredList[lang]

    this.emit('change')
  }

  addFeaturedItem(data, lang) {
    this.featuredList[lang].push({
      id: Date.now(),
      name: data.name,
      content: data.content,
      wordType: 2
    })

    this.emit('change')
  }

  deleteFeaturedItem(id, lang) {
    const list = this.featuredList[lang]
    for(let i = 0; i < list.length; i++) {
      if(list[i].id === parseInt(id))
        list.splice(i, 1)
    }

    this.emit('change')
  }

  handleLearnedItem(id, lang) {
    const list = this.featuredList[lang]
    for(let i = 0; i < list.length; i++) {
      if(list[i].id === parseInt(id))
        list[i].learned = !list[i].learned
    }
    this.emit('change')
  }

  handleActions(action) {
    switch (action.actionType) {
      case 'ADD_FEATURED_ITEM':
        this.addFeaturedItem(action.data, action.lang)
        break;
      case 'LEARN_FEATURED_ITEM':
        this.handleLearnedItem(action.id, action.lang)
        break;
      case 'DELETE_FEATURED_ITEM':
        this.deleteFeaturedItem(action.id, action.lang)
        break;
    }
  }
}

const FeaturedList = new Store

Dispatcher.register(FeaturedList.handleActions.bind(FeaturedList))

export default FeaturedList
