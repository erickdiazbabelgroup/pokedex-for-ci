
import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        console.log('Pokémon image URL:', imageUrl)

        return (
          <Link key={id} to={`/pokemon/${name}`} className="list-item">
            <img
              src={imageUrl}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/fallback.png' // Asegúrate de tener este archivo en /public o /dist
              }}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
            <div className="list-item-name">
              {name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PokemonList
