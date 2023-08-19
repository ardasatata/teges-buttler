const axios = require('axios');

async function fetchRequest(command) {
  const apiKey = process.env.CLOUD_HOST_API_KEY ?? '';
  const apiUrl = `https://api.idcloudhost.com/v1/sgp01/user-resource/vm/${command}`;
  const requestData = {
    uuid: '19d09bf8-2d14-4eae-8ea4-570a2a2d83e8'
  };
  
  const headers = {
    'apikey': apiKey
  };

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = { fetchRequest };