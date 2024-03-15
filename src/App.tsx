import './App.css'
import { PokemonCard } from './PokemonCard'
import { useFetch } from './hooks/useFetch'
import { Result } from './interfaces/pokemons'

const getPokemons = async () => {
  const pokemons: Result[] = await useFetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')

  return pokemons
}

const pokemons = await getPokemons();


function App() {
  
  return (
    <>
      <h1>Pokemones</h1>
      <div>
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} name={pokemon.name} id={pokemon.url[34]} />
          ))
        }
      </div>
      
    </>
  )
}

export default App
