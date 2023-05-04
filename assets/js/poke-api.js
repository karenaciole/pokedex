const pokeApi = {}

pokeApi.getPokemonDetails = async (pokemon) => {
    const response = await fetch(pokemon.url);
    return await response.json();
}

pokeApi.getAllPokemons = async (offset=0, limit=5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const response = await fetch(url);
    const data = await response.json();
    const pokemons = data.results;
    const requests = pokemons.map(pokeApi.getPokemonDetails);
    const pokemonDetails = await Promise.all(requests);
    return pokemonDetails;
} 

