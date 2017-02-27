import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TodoList from '../components/toDoList/ToDoList'

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
        <Header
          changeInputVal={this.changeTitle.bind(this)}
          title={this.state.title}
          default={this.state.placeholder}
          router={this.props.router}
        />

        <TodoList />

        {this.props.children}

        <Footer/>
      </div>
    )
  }
}

export default Layout
