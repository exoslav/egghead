import $ from 'jquery'
import React from 'react'

class WordsListItem extends React.Component {
  addToFeatured(e) {
    const self = $(e.target)
    const data = {
      id: self.attr('data-id'),
      name: self.closest('.item').find('dt').text(),
      content: self.closest('.item').find('dd').text()
    }

    this.props.add(data)
  }

  render() {
    const layout = this.props.layout
    const { name, content, id, learned, featured } = this.props.data
    const learnedClassName = learned ? 'bg-success' : 'bg-danger'
    const learnedButtonClassName = learned ? 'btn-success' : 'btn-danger'
    const featuredButtonClassName = featured ? 'fa-star' : 'fa-star-o'

    return(
      <div class={`${layout}`}>
        <div class={`item ${learnedClassName}`}>
          <dt class="to-do-list-item">
            <strong>{name}</strong>
          </dt>
          <dd>
            <span>{content}</span>
            <button class="fa fa-trash-o btn btn-danger btn-xs pull-right" onClick={this.props.deleteItem} type="button" data-id={id}></button>
            <button onClick={this.addToFeatured.bind(this)} class={`fa ${featuredButtonClassName} btn btn-warning btn-xs pull-right`} type="button" data-id={id}></button>
            <button onClick={this.props.learn} class={`fa fa-graduation-cap btn btn-xs pull-right ${learnedButtonClassName}`} type="button" data-id={id}></button>
          </dd>
        </div>
      </div>
    )
  }
}

export default WordsListItem
