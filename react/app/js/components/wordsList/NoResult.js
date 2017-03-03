import React from 'react'

class NoResult extends React.Component {
  render() {
    return(
      <div class="no-results col-xs-12 text-center">
        <div class="wrapper bg-danger vocabulary-box">
          <h3>There are no words, try to add some and learn them!</h3>
          <img src="./app/imgs/no-result.png" />
        </div>
      </div>
    )
  }
}

export default NoResult
