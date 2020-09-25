const request = require('request');


const fetchMyIP = function(callback){
  request('https://api.ipify.org?format=json', (error, response, body) =>{
    if (error) {
    callback(error, null);
    return;
    }
    if (response.statusCode !== 200){
      callback(error(`status code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });

};

const fetchCoordsByIP = function(ip ,callback){
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if(error) {
      callback(error, null);
      return;
    }
    if(response.statusCode !== 200){
      callback(error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }
    const {latitude, longitude } = JSON.parse(body).data;
    callback(null, {latitude, longitude});
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = (`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);

  request(url,(error, response, body) => {
    if(error){
      callback(error, null);
      return;
    }
    if(response.statusCode !== 200){
      callback(error(`Status Code ${response.statusCode} when retrieving Iss passing times: ${body}`), null);
      return;
    }
    const pass = JSON.parse(body).response;
    callback(null, pass);
  });
};

const nextISSTimesForMyLocation = function(callback){
  fetchMyIP((error, ip) => {
    if(error){
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, location) =>{
      if(error){
        return(error, null);
      }
      fetchISSFlyOverTimes(location(error, pass) => {
        if(error){
          return callback(error, null);
        }
        callback(null, nextPasses);
      });
    });
  });

};
module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };