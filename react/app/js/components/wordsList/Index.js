import $ from 'jquery'
import React from 'react'
import WordsListItem from './Item'

class WordList extends React.Component {
  constructor() {
    super()

    this.state = {
      layout: 'col-xs-12',
      filter: []
    }
  }

  changeLayout(e) {
    const layout = e.target.getAttribute('data-layout')

    $('.layout-filter button').addClass('bg-info').removeClass('bg-primary active')
    $(e.target).removeClass('bg-info').addClass('bg-primary active')

    this.setState({
      layout
    })
  }

  handleFiltering(e) {
    let newFilter = filter.slice()
    const filter = this.state.filter
    const val = e.target.getAttribute('data-filter')
    const index = newFilter.indexOf(val)

    if(index > -1) {
      newFilter.splice(index, 1)
    } else {
      newFilter = newFilter.concat([val])
    }

    this.setState({
      filter: newFilter
    })
  }

  render() {
    const filteredItems = []
    const items = this.props.items

    // // vyprazdni vyfiltrovane itemy
  	// filteredItems.splice(0, filteredItems.length)
    //
    // for(let i = 0; i < items.length; i++) {
    // 	let item = items[i]
  	// 	let sluzby = item.sluzby
    //   let filterCount = 0
    //
    //   for(let j = 0; j < filter.length; j++) {
    //   	let filterKey = filter[j]
    //
    //     for(let k = 0; k < sluzby.length; k++) {
    //     	let sluzba = sluzby[k]
    //
  	// 			if(filterKey === sluzba)
    //       	filterCount++
    //     }
    //   }
    //
    //   if(filterCount === filter.length)
    //   	filteredItems.push(item)
    // }

    const WordList = items.map((item) => <WordsListItem
      deleteItem={this.props.delete}
      key={item.id}
      data={item}
      layout={this.state.layout}
    />)

    return(
      <div id="vocabulary-list">
        <div class="vocabulary-filter clearfix">
          <ul class="list-unstyled">
            <li class="layout-filter">
              <strong>Layout:</strong>
              <ul class="list-unstyled">
                <li><button onClick={this.changeLayout.bind(this)} class="btn bg-primary active btn-xs" data-layout="col-xs-12">1 column</button></li>
                <li><button onClick={this.changeLayout.bind(this)} class="btn bg-info btn-xs" data-layout="col-xs-6">2 columns</button></li>
              </ul>
            </li>

            <li>
              <strong>Word class:</strong>
              <ul class="list-unstyled">
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="1" class="btn bg-info btn-xs">Substantiva</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="2" class="btn bg-info btn-xs">Adjectives</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="3" class="btn bg-info btn-xs">Pronomina</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="4" class="btn bg-info btn-xs">Numeralia</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="5" class="btn bg-info btn-xs">Verba</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="6" class="btn bg-info btn-xs">Adverbia</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="7" class="btn bg-info btn-xs">Prepozice</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="8" class="btn bg-info btn-xs">Konjunkce</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="9" class="btn bg-info btn-xs">Partikule</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="10" class="btn bg-info btn-xs">Interjekce</button></li>
              </ul>
            </li>

            <li>
              <strong>Others:</strong>
              <ul class="list-unstyled">
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="idioms" class="btn bg-info btn-xs">Idioms</button></li>
                <li><button onClick={this.handleFiltering.bind(this)} data-filter="learned" class="btn bg-info btn-xs">Learned</button></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="row">
          <dl class="dl-horizontal">
            {WordList}
          </dl>
        </div>
      </div>
    )
  }
}

export default WordList
