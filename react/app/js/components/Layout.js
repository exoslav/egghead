import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <h1>It worsks {5 + 5}!</h1>
        <Footer/>
      </div>
    )
  }
}

export default Layout
