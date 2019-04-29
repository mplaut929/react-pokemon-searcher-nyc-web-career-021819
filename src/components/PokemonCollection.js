import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderCards = () => {
    return this.props.pokemon.map(poke => {
      return <PokemonCard {...poke}/>
    })
  }


  render() {
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        { this.renderCards() }
      </Card.Group>
    )
  }
}

export default PokemonCollection
