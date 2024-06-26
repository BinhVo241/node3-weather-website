const request = require("request");

const forecast = (latitude, longitude, callback) => {
  // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
  const url = `http://api.weatherapi.com/v1/forecast.json?key=3b697eb1a7604cbaa7193457241503&q=${latitude},${longitude}&aqi=no`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined || {});
    } else if (body.error) {
      callback("Unable to find location", undefined || {});
    } else {
      callback(
        undefined,
        body.location.name +
          " It is currently " +
          body.current.temp_c +
          " degress out. There is a " +
          body.current.precip_in +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
