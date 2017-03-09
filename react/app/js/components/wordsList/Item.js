import $ from 'jquery'
import React from 'react'

class WordsListItem extends React.Component {
  isInFeatured(item) {
    return JSON.parse(item.getAttribute('data-item-featured')) ? true : false
  }

  addToFeatured(e) {
    const data = {
      id: parseInt(e.target.getAttribute('data-item-id')),
      name: e.target.getAttribute('data-item-name'),
      content: e.target.getAttribute('data-item-content'),
      learned: JSON.parse(e.target.getAttribute('data-item-learned')), // string to boolean
      featured: !JSON.parse(e.target.getAttribute('data-item-featured')) // string to boolean
    }

    // pokud jiz je ve featured
    if(this.isInFeatured(e.target)) {
      this.props.deleteItemFromFeatued(data, e)
    } else {
      this.props.add(data)
    }
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
            <button
              class="fa fa-trash-o btn btn-danger btn-xs pull-right"
              onClick={this.props.deleteItem}
              type="button"
              data-item-id={id}
            ></button>
          
            <button
              onClick={this.addToFeatured.bind(this)}
              class={`fa ${featuredButtonClassName} btn btn-warning btn-xs pull-right`}
              type="button"
              data-item-id={id}
              data-item-name={name}
              data-item-content={content}
              data-item-learned={learned}
              data-item-featured={featured}
            ></button>

            <button
              onClick={this.props.learn}
              class={`fa fa-graduation-cap btn btn-xs pull-right ${learnedButtonClassName}`}
              type="button"
              data-item-id={id}
            ></button>
          </dd>
        </div>
      </div>
    )
  }
}

export default WordsListItem
