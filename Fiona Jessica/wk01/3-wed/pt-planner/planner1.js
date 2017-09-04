
var alamein = ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'];

var glenWaverly = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'];

var sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];

var lines = [
  { alamein: alamein },
  { glenWaverly: glenWaverly },
  { sandringham: sandringham }
];

//Get origin and destination station from user
var origin = 'prahran';
var destination = 'southern cross';

//find given origin & destination station from which line
var findStationLine = function(stationName) {
  for (var i = 0; i < lines.length; i++) {
    for (var key in lines[i]) { //key is key
      var value = lines[i][key];  //value is obj[key] = array of train line
      if (value.indexOf(stationName) !== -1) {  //iterate through array to find match value
        return key;
      }
    }
  }
};

var getStationList = function(lineName) {
  for (var i = 0; i < lines.length; i++) {
    for (var key in lines[i]) {
      var value = lines[i][key];
      if (key === lineName) {
        return value;
      }
    }
  }
};

var originLine = findStationLine(origin);
var destinationLine = findStationLine(destination);
console.log(originLine);
console.log(destinationLine);

var originStationList = getStationList(originLine);
var destinationStationList = getStationList(destinationLine);
// console.log(originStationList);
// console.log(destinationStationList);

//create user route

// if origin and destination station is located within same line
//   find how many trips required: 1 trip
//     trip no 1
//       starting point: origin station
//       end point: destination station
//
//       find all station between starting point and end point, and added into user route
//     then print user route including number of stops
if (originLine === destinationLine) {
  var indexOrigin = originStationList.indexOf(origin);
  var indexDestination = destinationStationList.indexOf(destination);
  if (indexDestination > indexOrigin) {
    var journey = originStationList.slice(indexOrigin, indexDestination = indexDestination + 1)
    console.log(journey.length - 1 + ' stops total');
    console.log(journey.join(' --> '));
  } else {
    var journey = originStationList.slice(indexDestination, indexOrigin = indexOrigin + 1);
    journey.reverse();
    console.log(journey.length - 1 + ' stops total');
    console.log(journey.join(' --> '));
  }
}
