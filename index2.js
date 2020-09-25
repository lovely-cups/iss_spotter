const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIP } = require('./iss_promised');
const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesdForMyLocation } =reqwuire('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

  nextISSTimesdForMyLocation()
    .then((passTimes) => {
      printPassTimes(passTimes);
    })
    .catch((error) => {
      console.log("It didnt work: ", error.message);
    });

