
var glenWaverly = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga']


var origin = prompt('input origin: ');
var indexOrigin = glenWaverly.indexOf(origin);
var searchOrigin = glenWaverly[indexOrigin];



var destination = prompt('input destination: ');
var indexDestination = glenWaverly.indexOf(destination);
var searchDestination = glenWaverly[indexDestination];



console.log('origin: ' + origin);
console.log('destination: ' + destination);

if (indexDestination > indexOrigin) {
  var journey = glenWaverly.slice(indexOrigin, indexDestination = indexDestination + 1);
  console.log(journey.length - 1 + ' stops total');
  console.log(journey.join(' --> '));
} else {
  var journey = glenWaverly.slice(indexDestination, indexOrigin = indexOrigin + 1);
  journey.reverse();
  console.log(journey.join(' --> '));
  console.log(journey.length - 1 + ' stops total');
}



//
// var a = glenWaverly.indexOf(glenWaverly[1]);
// var b = glenWaverly.indexOf(glenWaverly[3]);
//
// var stop = b - a;
// console.log(stop + ' stops total');
//
// var journeyResult = '';
// for (var index = a; index <= b; index++) {
//   journeyResult = journeyResult + glenWaverly[index] + ' ---->'
// }
