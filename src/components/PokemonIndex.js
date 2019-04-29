import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokeData: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({pokeData: data}))
  }

  handleSearch = (e, { value }) => {
    this.setState({
      searchTerm: value
    })
  }

  addPokemon = (newPoke) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPoke)
    })
    .then(res => res.json())
    .then(response =>
    this.setState({
      pokeData: [...this.state.pokeData, response]
    })
  )
  }



  render() {
    const searchedPokemon = this.state.pokeData.filter(poke =>
    poke.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon = {searchedPokemon}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
