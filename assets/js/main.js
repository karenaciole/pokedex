
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.results))
    .then((pokemonList) => {
        console.log(pokemonList)
    })
    .catch((error) => console.log(error));