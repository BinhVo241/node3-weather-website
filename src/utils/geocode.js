const request = require("request");
// api key geocode: 6627bce1f0911272166431fqx4263c5
// https://geocode.maps.co/search?q=address&api_key=6627bce1f0911272166431fqx4263c5
// https://geocode.maps.co/reverse?lat=latitude&lon=longitude&api_key=6627bce1f0911272166431fqx4263c5
const geocode = (address, callback) => {
  // const url =
  //   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
  //   address +
  //   ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";
  const url = `https://geocode.maps.co/search?q=${address}&api_key=6627bce1f0911272166431fqx4263c5`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined || {});
    } else if (body.length === 0) {
      callback("Unable to find location. Try another search.", undefined || {});
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        location: body[0].display_name,
      });
    }
  });
};

module.exports = geocode;
