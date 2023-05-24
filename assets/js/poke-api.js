const pokeApi = {}


const convertPokeApiDetailToPokemon = (pokemonDetail) => {
    const pokemon = new Pokemon();
    pokemon.id = pokemonDetail.order;
    pokemon.name = pokemonDetail.name;

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types; 

    pokemon.types = types;
    pokemon.type = type;
    
    
    pokemon.image = pokemonDetail.sprites.other.dream_world.front_default;

    return pokemon;
}


pokeApi.getPokemonDetails = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const pokemonDetail = await response.json();
    return convertPokeApiDetailToPokemon(pokemonDetail);
    
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

