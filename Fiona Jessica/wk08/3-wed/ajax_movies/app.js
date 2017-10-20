
$('#search-movie-btn').on('click', function() {

  $.ajax({
    url: "http://omdbapi.com/",
    method: 'get',
    data: { apikey: '2f6435d9', s: $('input').val() }
  })
    .done(function( response ) {
      _.each(response.Search, function(movie) {
        var $h2 = $('<h2>').text( movie.Title );
        $('.results').append( $h2 );
      })
    })
});
