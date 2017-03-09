import Dispatcher from '../dispatcher'

export function handleWordListLearnItem(id, lang) {
  Dispatcher.dispatch({
    actionType: 'LEARN_WORD_ITEM',
    id,
    lang
  })
}

export function createWordListItem(data) {
  Dispatcher.dispatch({
    actionType: 'CREATE_WORDLIST_ITEM',
    data
  })
}

export function updateWordListItem(data, lang) {
  Dispatcher.dispatch({
    actionType: 'UPDATE_WORDLIST_ITEM',
    newItem: data,
    lang
  })
}

export function deleteWordListItem(id, lang) {
  Dispatcher.dispatch({
    actionType: 'DELETE_WORDLIST_ITEM',
    id,
    lang
  })
}
