
$('#search-movie-btn').on('click', function() {

  $('.results').children().remove();
  
  var options = {
    url: "http://omdbapi.com/",
    method: 'get',
    data: { apikey: '2f6435d9', s: $('input').val() }
  }

  var appendMovie = function(response){
    _.each(response.Search, function(movie) {
      var $h2 = $('<h2>').text( movie.Title );
      $('.results').append( $h2 );
    })
  }

  $.ajax( options ).done( appendMovie )

});
