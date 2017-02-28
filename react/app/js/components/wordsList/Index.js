import React from 'react'
import WordsListItem from './Item'

class WordList extends React.Component {
  render() {
    const toDoList = this.props.items.map((item) => <WordsListItem
      deleteItem={this.props.delete}
      key={item.id}
      data={item}
    />)

    return(
      <div class="col-sm-6">
        <dl class="dl-horizontal">
          {toDoList}
        </dl>
      </div>
    )
  }
}

export default WordList
