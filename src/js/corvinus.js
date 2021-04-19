export function corvinus(playPause) {
  console.log('majom');
  $('#splashVideo')
    .get(0)
    .pause();
  $('.phone.video').click(playPause);
}
export function corvinusLoaded() {
  console.log('majom');

  setTimeout(function() {
    $('.preloader').addClass('transparent no-pointer-events');
    var playPromise = $('#splashVideo')
      .get(0)
      .play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {})
        .catch(() => {
          //autoplay forbidden
          $('#headerCol1').removeClass('push-right');
          $('#headerCol2').removeClass('transparent push-right');
          $('#headerCol3').removeClass('transparent push-right');
          $('.phone.video .playButton').removeClass('transparent');
        });
    }

    $('#splashVideo').on('ended', function() {
      $('#headerCol1').removeClass('push-right');
      $('#headerCol2').removeClass('transparent push-right');
      $('#headerCol3').removeClass('transparent push-right');
      $('.phone.video .playButton').removeClass('transparent');
    });
  }, 300);
}
