const { httpClientPlugin } = require('../plugins');

// async y await
const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);

    return pokemon.name;

    // const resp = await fetch(url);
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');

    // return pokemon.name;

    // Promesas en cadena
    // return fetch(url)
    //     .then(resp => resp.json())
    //     // .then(() => {throw new Error('No existe')})
    //     .then(pokemon => pokemon.name);
}


module.exports = getPokemonById;