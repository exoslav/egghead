import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  constructor() {
    super()
    this.langs = {
      TITLE: 'Vitejte na moji strance!',
      PLACEHOLDER: 'Zde něco napište'
    }

    this.state = {
      title: this.langs.TITLE,
      placeholder: this.langs.PLACEHOLDER
    }
  }

  changeTitle(e) {
    let val = e.target.value

    this.setState({
      title: e.target.value
    })

    if(val.length === 0) {
      this.setState({
        title: this.langs.TITLE
      })
    }
  }

  render() {
    return(
      <div>
        <Header changeInputVal={this.changeTitle.bind(this)} title={this.state.title} default={this.state.placeholder} />
        <Footer/>
      </div>
    )
  }
}

export default Layout
