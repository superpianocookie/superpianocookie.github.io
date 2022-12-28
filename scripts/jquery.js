
/********************** automatic pause when playing another video *****/

var $allVideos = $('video').on('ended', function() {
  $('.playpause').css('opacity', 1);
});
var $allPlayPause = $('.playpause');

$allPlayPause.on('click', function() {
  var $playpause = $(this),
    video = $playpause.parent().find('video')[0];
  
  if (video.paused) {
    video.play();
    $allPlayPause.css('opacity', 1);
    $playpause.css('opacity', 0)

    // pause all but this:
    $allVideos.not(video).each(function(i, vid) {
      vid.pause();
    });
  } else {
    video.pause();
    $playpause.css('opacity', 1)
    $('.playpause').show();
  }
});
