const axios = require('axios');

const { TIMEOUT } = process.env();

module.exports = (baseUrl) =>{
    return axios.crea({
        baseUrl: baseUrl,
        timeout: TIMEOUT 
    })
}