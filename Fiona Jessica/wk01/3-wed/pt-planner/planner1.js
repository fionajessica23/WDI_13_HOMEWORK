//have 3 arrays for each lines
//hardcode richmond, assign value

//origin for loop, cari satu2 di setiap array sampe ketemu
//destination for loop, cari satu2 di setiap array sampe ketemu
//

var alamein = ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'];

var glenWaverly = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'];

var sandringham = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];

var origin = prompt('input origin: ');
var indexOrigin = glenWaverly.indexOf(origin);
var searchOrigin = glenWaverly[indexOrigin];
console.log(searchOrigin);



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
