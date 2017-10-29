console.log('running');

var ajaxOffset = 0;
var ajaxLimit = 10;

var ajaxCall = function() {

  var options = {
    url: "http://api.giphy.com/v1/gifs/search",
    method: 'get',
    data: { api_key: 'BMEFrQE0nsQdqX8Dxfce6vtHemM2XWnO',
    q: $('input').val(),
    limit: ajaxLimit,
    offset: ajaxOffset
    }
  }
  // alternative
  // var appendImages = function(response){
  //   var strImg = '';
  //   _.each(response.data, function(image) {
  //                          + is for combining variable and string
  //     strImg += '<img src='+image.images.downsized.url+'>';
  //   })
  //   $('.results').html( strImg );
  // }
  var appendImages = function(response){
    _.each(response.data, function(image) {
      var strImg = '<div><img src='+image.images.downsized.url+'></div>';
      $('.results').append( strImg );
    })
  }
  $.ajax( options ).done( appendImages )
}

$('#search-btn').on('click', ajaxCall);


$(window).scroll(function () {
   if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    console.log(ajaxOffset);
    ajaxOffset += ajaxLimit;
    console.log(ajaxOffset);
    ajaxCall();
   }
});
