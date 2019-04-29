import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggleSprite: true
  }

  handleClick = () => {
    this.setState({
      toggleSprite: !this.state.toggleSprite
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick}
              src={this.state.toggleSprite ? this.props.sprites.front : this.props.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
