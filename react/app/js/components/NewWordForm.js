import React from 'react'

class NewWordForm extends React.Component {
  render() {
    return(
      <form class="form clearfix">
        <div class="form-group">
          <label for="create-to-do-item-name">Name of the new word</label>
          <input id="create-to-do-item-name" class="form-control" />
        </div>

        <div class="form-group">
          <label for="create-to-do-item-content">Description of the new word</label>
          <input id="create-to-do-item-content" class="form-control" />
        </div>

        <button
          class="btn btn-info pull-right"
          onClick={this.props.createItem.bind(this)} type="button">
          Add new word to vocabulary
        </button>
      </form>
    )
  }
}

export default NewWordForm
