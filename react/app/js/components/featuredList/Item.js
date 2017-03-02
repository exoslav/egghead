import React from 'react'

class Item extends React.Component {
  render() {
    const erase = this.props.delete
    const { name, content, id } = this.props.data

    return(
      <div class="item col-sm-3">
        <dt class="to-do-list-item">
          <strong>{name}</strong>
        </dt>
        <dd>
          <span>{content}</span>
          <div>
            <button class="btn btn-success btn-xs" type="button" data-id={id}>learned</button>
            <button onClick={erase} class="btn btn-danger btn-xs" type="button" data-id={id}>X</button>
          </div>
        </dd>
      </div>
    )
  }
}

export default Item
