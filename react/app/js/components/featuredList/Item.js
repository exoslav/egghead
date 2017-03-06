import React from 'react'

class Item extends React.Component {
  render() {
    const erase = this.props.delete
    const learn = this.props.learn
    const { name, content, id, learned } = this.props.data
    const learnedButtonClassName = learned ? 'btn-success' : 'btn-danger'

    return(
      <div class="item col-sm-3">
        <dt class="to-do-list-item">
          <strong class="item-header">
            <span class="item-name">{name}</span>
            <span title={`${learned ? 'Learned already!' : 'Not learned yet!'}`} class={`item-learned ${learned ? 'learned' : 'not-learned'}`}>&nbsp;</span>
          </strong>
        </dt>
        <dd>
          <span>{content}</span>
          <div>
            <button onClick={learn} class={`fa fa-graduation-cap btn btn-xs ${learnedButtonClassName}`} type="button" data-id={id}></button>
            <button onClick={erase} class="fa fa-star btn btn-warning btn-xs" type="button" data-id={id}></button>
            <button class="fa fa-trash-o btn btn-danger btn-xs" onClick={this.props.deleteItem} type="button" data-id={id}></button>
          </div>
        </dd>
      </div>
    )
  }
}

export default Item
