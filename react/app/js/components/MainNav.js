import React from 'react'
import { Link } from 'react-router'

class MainNav extends React.Component {
  actions() {
    return {
      backToHomepage: e => {
        e.preventDefault()
        this.props.router.push('/')
      }
    }
  }

  render() {
    return(
      <nav>
        <a onClick={this.actions().backToHomepage} href="/">Domů</a>
        <Link to="archives">Archives</Link>
        <Link to="settings">Settings</Link>
      </nav>
    )
  }
}

export default MainNav
