import React, { Component } from 'react'
import "./Pokedex.css"

class GithubUser extends Component {
  state = {
    pokemon: {
        sprites: {
      front:''
        }
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokemon}`)
      .then(response => response.json())
      .then(pokedex => this.setState({ pokedex }))
  }

  componentWillRecieveProps(nextProps) {
      const locationChanged = nextProps.location !== this.props.location
      if (locationChanged){
          this.fetchUserData(nextProps)
      }
  }

    pokemonType() {
        var table = []
        var typeNumber = []
        var type = []
        const { pokedex } = this.state
        if(!pokedex.types){
            return
        }
        for (var i = 0; i < pokedex.types.length; i++){
            typeNumber.push(
                <th key={i+1}>Type #{i+1}</th>
            )
            type.push(
                <td key={pokedex.types[i].type.name}>{pokedex.types[i].type.name}</td>
            )
        }
        table.push(
            <table className="typeTable">
                <caption>Type(s)</caption>
                <thead>
                    <tr>
                        {typeNumber}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {type}
                    </tr>
                </tbody>
            </table>
        )
        return table
    }

  render() {
    const { user } = this.state
    return (
      <div className="pokedex">
         <img src={pokedex.sprites["front_default"]} alt="pokemon"/>
                <h2>#{pokedex.id}</h2>
                <h2>{pokedex.name}</h2>
                <div className="type">{this.pokemonType()}</div>
                <div className="stats">{this.pokemonStats()}</div>
                <div className="abilities">{this.pokemonAbilities()}</div>
      </div>
    )
  }
}

export default Pokedex