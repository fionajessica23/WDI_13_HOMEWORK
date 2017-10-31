// var express = require('express');
// var app = express(); // server maker
var request = require('request');

request('http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=e0720c5ffcef0132b0f81daba4d080b7&units=metric',
  function (error, response, body) {

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var toJSON = JSON.parse(body)
  var temperature = toJSON.main.temp;

  console.log( temperature );

});
