import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoBox from '../components/InfoBox'
import WordsList from '../components/wordsList'
import NewWordForm from '../components/NewWordForm'
import FeaturedList from '../components/featuredList'
import * as WordListActions from '../actions/WordListActions'
import * as FeaturedWordsActions from '../actions/FeaturedWordsActions'

import WordListStore from '../stores/WordListStore'
import FeaturedListStore from '../stores/FeaturedList'

class Layout extends React.Component {
  constructor() {
    super()
    this.langs = {
      TITLE: 'Slovíčkárno'
    }

    this.state = {
      totalVocabulary: WordListStore.getTotal(),
      totalVocabularyLearned: WordListStore.getTotalLearned(),
      wordList: WordListStore.getAll(),
      featuredWordsList: FeaturedListStore.getAll()
    }
  }

  componentWillMount() {
    FeaturedListStore.on('change', () => {
      this.setState({
        featuredWordsList: FeaturedListStore.getAll()
      })
    })

    WordListStore.on('change', () => {
      this.setState({
        wordList: WordListStore.getAll(),
        totalVocabulary: WordListStore.getTotal(),
        totalVocabularyLearned: WordListStore.getTotalLearned(),
      })
    })
  }

  addWordListItem() {
    let name = document.getElementById('create-to-do-item-name').value
    let content = document.getElementById('create-to-do-item-content').value

    WordListActions.createTodo({
      name,
      content
    })
  }

  deleteWordListItem(e) {
    const id = e.target.getAttribute('data-id')
    WordListActions.deleteTodoItem(id)
  }

  addFeaturedWordsItem(e) {
    let name = document.getElementById('create-featured-item-name').value
    let content = document.getElementById('create-featured-item-content').value

    FeaturedWordsActions.addFeaturedItem({
      name,
      content
    })
  }

  deleteFeaturedWordsItem(e) {
    const id = e.target.getAttribute('data-id')
    FeaturedWordsActions.deleteFeaturedItem(id)
  }

  render() {
    return(
      <div>
        <div class="container">
          <Header title={this.langs.TITLE} />

          <div class="row">
            <div class="col-sm-6">
              <NewWordForm
                createItem={this.addWordListItem.bind(this)}
              />
            </div>

            <div class="col-sm-6">
              <InfoBox
                total={this.state.totalVocabulary}
                totalLearned={this.state.totalVocabularyLearned}
              />
            </div>

            <div class="col-sm-12">
              <FeaturedList
                items={this.state.featuredWordsList}
                delete={this.deleteFeaturedWordsItem.bind(this)}
                add={this.addFeaturedWordsItem.bind(this)}
              />
            </div>

            <div class="col-sm-12">
              <WordsList
                items={this.state.wordList}
                delete={this.deleteWordListItem.bind(this)}
              />
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Layout
