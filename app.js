const request = require('request');

const units = '?units=si';
const url = 'https://api.darksky.net/forecast/ef009f8cd705b6deb232cd5011736a64/37.8267,-122.4233'+units;

request({url: url, json: true}, (error, response) => {
  var data = response.body.currently;
  console.log(response.body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degrees out. ther is a ' + data.precipProbability + ' chance of rain.');
});
