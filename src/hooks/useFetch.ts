import { PokemonResponse } from "../interfaces/pokemons";

export const useFetch = async (url: string) => {
    const data: PokemonResponse = await fetch(url)
        .then(res => res.json())
        .catch(error => {
        console.error(error)
        throw new Error(error)
        })
  
  return data.results;
}