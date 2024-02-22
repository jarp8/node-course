const { getUuid } = require('../plugins/uuid.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { httpClientPlugin } = require('../plugins/http-client.plugin');
module.exports = {
    getUuid,
    getAge,
    httpClientPlugin,
}