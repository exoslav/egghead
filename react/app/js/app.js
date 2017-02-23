import React from 'react'
import ReactDOM from 'react-dom'

class Layout extends React.Component {
  render() {
    return(
      <h1>It worsks!</h1>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)

if(module.hot) {
  module.hot.accept()
}
