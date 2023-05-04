
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const convertPokemonToItem = (pokemon) => {
    return `
        <li class="pokemon">
            <span class="id">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getAllPokemons().then((pokemons = []) => {  
    pokemonList.innerHTML += pokemons.map(convertPokemonToItem).join(''); // mapeia o array de pokemons e converte para string
})
   