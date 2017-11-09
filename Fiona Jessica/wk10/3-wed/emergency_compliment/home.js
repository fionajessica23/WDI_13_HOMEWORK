var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080", 'mistyrose'];

var randomized = function (array) {
  return array[Math.floor(Math.random()*array.length)];
}

function home( req, resp ) {
  resp.render('index', {
    magicComp: randomized(compliments),
    color: randomized(colors),
    name: req.params.name || ''
  });
}

module.exports = {
  home: home
}
