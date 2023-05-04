const pokeApi = {}



pokeApi.getPokemonDetails = async (pokemon) => {
    return (await fetch(pokemon.url)).json();
}

pokeApi.getAllPokemons = async (offset=0, limit=5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((requests) => Promise.all(requests)) 
        .then((pokemonDetails) => {
            debugger
            console.log(pokemonDetails)
        })
} 

