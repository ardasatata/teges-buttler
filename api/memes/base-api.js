const { default: axios } = require('axios');
const querystring = require('node:querystring');

const api = axios.create({
    timeout: 120000,
    headers: {
        Accept: 'application/json',
    },
    paramsSerializer: (params) => querystring.stringify(params),
});

module.exports = {
    get: async (url, customConfig = {}) => {
        return api
            .get(url, {
                ...customConfig,
            })
            .then((response) => Promise.resolve(response.data))
            .catch((err) => Promise.reject(err));
    },
};
