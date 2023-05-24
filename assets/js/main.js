const pokemonList = document.getElementById('pokemonList');
const moreButton = document.getElementById('moreButton');
const limit = 5;
let offset = 0;

const convertPokemonToList = (pokemon) => {
    return `
        <li class="pokemon ${pokemon.type}">
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

const loadMorePokemons = (offset, limit) => {
    pokeApi.getAllPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToList).join('');
    });
}

loadMorePokemons(offset, limit);

moreButton.addEventListener('click', () => {
    offset+=limit;
    loadMorePokemons(offset, limit);
});
