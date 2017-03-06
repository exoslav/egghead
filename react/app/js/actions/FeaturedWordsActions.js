import Dispatcher from '../dispatcher'

export function handleFeaturedListLearnItem(id, lang) {
  Dispatcher.dispatch({
    actionType: 'LEARN_FEATURED_ITEM',
    id,
    lang
  })
}

export function addFeaturedItem(data, lang) {
  Dispatcher.dispatch({
    actionType: 'ADD_FEATURED_ITEM',
    data,
    lang
  })
}

export function deleteFeaturedItem(id, lang) {
  Dispatcher.dispatch({
    actionType: 'DELETE_FEATURED_ITEM',
    id,
    lang
  })
}
