/*const { fetchMyIP } = require('./iss');
const {fetchCoordsByIP } = require('./iss');
const {fetchISSFlyOverTimes } = require('./iss');
const exCoords = {latitude: '23.12345', longitude: '12.345678'};
*/
/*fetchCoordsByIP("96.49.221.78", (error, coords) =>{
  if(error){
    console.log("it didnt work!", error);
    return;
  }
  console.log("It worked! Returned Coords:", coords);
})

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchISSFlyOverTimes(exCoords,(error, passTimes) => {
  if(error){
    console.log("it didnt works!", error);
    return;
  }
  console.log('it worked! Returned flyover times:' passTimes);
});
*/
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});