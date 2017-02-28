import React from 'react'

class Item extends React.Component {
  render() {
    return(
      <div class="col-sm-3">
        <dt class="to-do-list-item">
          <strong>{this.props.name}</strong>
        </dt>
        <dd>
          <span>{this.props.content}</span>
          <button class="btn btn-success btn-xs" type="button" data-id={this.props.id}>learned</button>
          <button onClick={this.props.delete} class="btn btn-danger btn-xs" type="button" data-id={this.props.id}>X</button>
        </dd>
      </div>
    )
  }
}

export default Item
