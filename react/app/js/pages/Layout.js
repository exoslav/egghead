import $ from 'jquery'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoBox from '../components/InfoBox'
import WordsList from '../components/wordsList'
import NewWordForm from '../components/NewWordForm'
import LanguageMenu from '../components/LanguageMenu'
import FeaturedList from '../components/featuredList'
import * as WordListActions from '../actions/WordListActions'
import * as FeaturedWordsActions from '../actions/FeaturedWordsActions'

import WordListStore from '../stores/WordListStore'
import FeaturedListStore from '../stores/FeaturedList'

class Layout extends React.Component {
  constructor() {
    super()

    this.menuItems = [
      'CZ',
      'SK',
      'EN'
    ]

    this.vocabularyOpts = {
      langs: this.menuItems,
      activeLang: (() => {
        let activeItem

        if(localStorage.getItem('activeLanguageItem')) {
          activeItem = localStorage.getItem('activeLanguageItem')
        } else {
          localStorage.setItem('activeLanguageItem', this.menuItems[0])
          activeItem = this.menuItems[0]
        }

        return activeItem
      })()
    }

    this.langs = {
      TITLE: 'Slovíčkárno',
      SUBTITLE: 'prostě pro slovíčka'
    }

    this.state = {
      vocabularyLang: this.vocabularyOpts.activeLang,
      totalVocabulary: WordListStore.getTotal(),
      totalVocabularyLearned: WordListStore.getTotalLearned(),
      wordList: WordListStore.getAll(this.vocabularyOpts.activeLang),
      featuredWordsList: FeaturedListStore.getAll(this.vocabularyOpts.activeLang)
    }
  }

  componentWillMount() {
    FeaturedListStore.on('change', () => {
      this.setState({
        featuredWordsList: FeaturedListStore.getAll(this.state.vocabularyLang),
        wordList: WordListStore.getAll(this.state.vocabularyLang)
      })
    })

    WordListStore.on('change', () => {
      this.setState({
        wordList: WordListStore.getAll(this.state.vocabularyLang),
        totalVocabulary: WordListStore.getTotal(),
        totalVocabularyLearned: WordListStore.getTotalLearned()
      })
    })
  }

  changeVocabulary(lang) {
    this.setState({
      wordList: WordListStore.getAll(lang),
      featuredWordsList: FeaturedListStore.getAll(lang),
      vocabularyLang: lang
    })
  }

  // WORDLIST ACTIONS
  addWordListItem(data) {
    const { name, content, wordClass, learned, idioms, lang} = data
    WordListActions.createWordListItem({
      name, content, wordClass, learned, idioms, lang
    })
  }

  deleteWordListItem(e) {
    const id = e.target.getAttribute('data-id')
    WordListActions.deleteWordListItem(id, this.state.vocabularyLang)
  }

  updateWordListItem(data) {
    WordListActions.updateWordListItem(data, this.state.vocabularyLang)
  }

  // FEATURED ACTIONS
  addFeaturedWordsItem(e) {
    let name = document.getElementById('create-featured-item-name').value
    let content = document.getElementById('create-featured-item-content').value

    FeaturedWordsActions.addFeaturedItem({
      name,
      content,
      lang: this.state.vocabularyLang
    })
  }

  addItemToFeatured(data) {
    FeaturedWordsActions.addFeaturedItem(data, this.state.vocabularyLang)
  }

  addItemToFeaturedFromWordList(data) {
    this.addItemToFeatured(data)
    this.updateWordListItem(data)
  }

  removeItemFromFeaturedFromWordList(data, event) {
    this.deleteFeaturedWordsItem(event)
    this.updateWordListItem(data)
  }

  deleteFeaturedWordsItem(e) {
    const id = e.target.getAttribute('data-item-id')
    FeaturedWordsActions.deleteFeaturedItem(id, this.state.vocabularyLang)
  }

  handleLearn(e) {
    const id = e.target.getAttribute('data-item-id')
    WordListActions.handleWordListLearnItem(id, this.state.vocabularyLang)
    FeaturedWordsActions.handleFeaturedListLearnItem(id, this.state.vocabularyLang)
  }

  render() {
    return(
      <div>
        <header class="bg-info">
          <Header title={this.langs.TITLE} subtitle={this.langs.SUBTITLE} />
        </header>

        <div id="vocabulary-header" class="bg-primary vocabulary-box">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <NewWordForm
                  createItem={this.addWordListItem.bind(this)}
                  vocabularyLang={this.state.vocabularyLang}
                />
              </div>

              <div class="col-sm-6">
                <InfoBox
                  total={this.state.totalVocabulary}
                  totalLearned={this.state.totalVocabularyLearned}
                />
              </div>

              <div class="col-sm-6">
                <LanguageMenu
                  items={this.vocabularyOpts.langs}
                  activeItem={this.vocabularyOpts.activeLang}
                  changeLang={this.changeVocabulary.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <FeaturedList
            items={this.state.featuredWordsList}
            delete={this.deleteFeaturedWordsItem.bind(this)}
            learn={this.handleLearn.bind(this)}
          />

          <WordsList
            items={this.state.wordList}
            delete={this.deleteWordListItem.bind(this)}
            deleteFromFeatured={this.removeItemFromFeaturedFromWordList.bind(this)}
            learn={this.handleLearn.bind(this)}
            add={this.addItemToFeaturedFromWordList.bind(this)}
          />
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Layout
