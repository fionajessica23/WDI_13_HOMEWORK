// var cities = ['Austin', 'Los Angeles', 'New York City', 'San Fransisco', 'Sydney'];
var cities = [
  { 'austin': 'Austin'},
  { 'la': 'Los Angeles'},
  { 'nyc': 'New York City'},
  { 'sf': 'San Fransisco'},
  { 'sydney': 'Sydney'}
];

var $cityType = $('#city-type');


function loadCities() {
  $.each(cities, function(key1, val1) {
    $.each(val1, function(key2, val2) {
      var $cityList = $('<option>').text(val2).val(key2);
      $cityType.append($cityList);
    })
  })

  // alternative
  // cities.forEach(function(city) {
  //   var $cityList = $('<option>').text(city);
  //   $cityType.append($cityList);
  // })
}

$( document ).ready(function() {
  loadCities();
});

$cityType.change(function() {
  var $selectedCity = $(this).val();
  $('body').removeClass().addClass($selectedCity);

  // if ($selectedCity === 'Austin') {
  //   $('body').removeClass().addClass('austin');
  // } else if ($selectedCity === 'Los Angeles') {
  //   $('body').removeClass().addClass('la');
  // } else if ($selectedCity === 'New York City') {
  //   $('body').removeClass().addClass('nyc');
  // } else if ($selectedCity === 'San Fransisco') {
  //   $('body').removeClass().addClass('sf');
  // } else if ($selectedCity === 'Sydney') {
  //   $('body').removeClass().addClass('sydney');
  // }

});
