import React from 'react'
import Item from './Item'

class FeaturedList extends React.Component {
  render() {
    const items = this.props.items.map((item, i) => <Item
      data={item}
      key={i}
      delete={this.props.delete}
    />)

    return(
      <div id="featured-list" class="bg-info vocabulary-box">
        <h3>Featured words</h3>

        <form class="row">
          <div class="form-group col-sm-3">
            <input id="create-featured-item-name" placeholder="Name" class="form-control" />
          </div>

          <div class="form-group col-sm-3">
            <input id="create-featured-item-content" placeholder="Description" class="form-control" />
          </div>

          <div class="form-group col-sm-6">
            <button onClick={this.props.add} class="btn btn-primary pull-left" type="button">
              + Add
            </button>
          </div>
        </form>

        <dl class="row">
          {items}
        </dl>
      </div>
    )
  }
}

export default FeaturedList
