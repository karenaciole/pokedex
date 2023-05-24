
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;



const convertPokemonToList = (pokemon) => {
    return `
        <li class="pokemon">
            <span class="id">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                
                <img src="${pokemon.image}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getAllPokemons().then((pokemons = []) => {  
    pokemonList.innerHTML += pokemons.map(convertPokemonToList).join(''); // mapeia o array de pokemons e converte para string
})
   