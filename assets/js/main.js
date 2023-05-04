
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const convertPokemonTypesToList = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`) 
}

const convertPokemonToList = (pokemon) => {
    return `
        <li class="pokemon">
            <span class="id">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                   ${convertPokemonTypesToList(pokemon.types).join('')}
                </ol>
                
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getAllPokemons().then((pokemons = []) => {  
    pokemonList.innerHTML += pokemons.map(convertPokemonToList).join(''); // mapeia o array de pokemons e converte para string
})
   