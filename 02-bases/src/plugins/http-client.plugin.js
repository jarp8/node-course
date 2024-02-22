const axios = require('axios');

// Patrón adaptador para el fetch
const httpClientPlugin = {
    // get: async (url) => {
    //     const resp = await fetch(url);
    //     return await resp.json();
    // },
    get: async (url) => {
        const resp = await axios.get(url);
        return resp.data;
    }

}

module.exports = {
    httpClientPlugin,
};

