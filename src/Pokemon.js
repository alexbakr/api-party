import React, { Component } from 'react'
import './Pokemon.css'
import { Route } from 'react-router-dom'
import Pokedex from './Pokedex'

class Pokemon extends Component {
    state = {
        pokemon: ''
    }

    handleChange = (ev) => {
        const pokemon = ev.currentTarget.value
        this.setState({ pokemon })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokemon/${this.state.pokemon}`)
    }

    render(){
        return(
            <div className='pokemon'>
                <img className="pokemon-logo" src="https://s-media-cache-ak0.pinimg.com/originals/90/c9/5f/90c95fdf8b1e7f1cbda882c96fb748bd.jpg" alt="pokemon"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text" 
                        value={this.state.pokemon}
                        onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Look up pokemon user</button>
                    </div>
                    </form>
                    <Route path='/pokemon/:pokemon' component={Pokedex} />
                    <Route exact path='/pokemon' render={()=>(
                        <h3>Please enter a pokemon to search on pokemon</h3>
                    )} />
            </div>)
    }
}
export default Pokemon;