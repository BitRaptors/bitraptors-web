import 'slick-carousel';
var countUpModule = require('countup.js');
var students;
var screens;
var studentsTest;

export function corvinus(playPause) {
  console.log('majom');
  $('#splashVideo')
    .get(0)
    .pause();
  $('.phone.video').click(playPause);

  $('body').addClass('stop-scrolling');
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });

  students = new countUpModule.CountUp('students', 11500, { separator: ' ' });
  screens = new countUpModule.CountUp('screens', 101);
  studentsTest = new countUpModule.CountUp('students-test', 50, {
    suffix: '+',
  });
}
export function corvinusLoaded() {
  $('body').removeClass('stop-scrolling');

  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    arrows: false,
  });
  setTimeout(function() {
    var playPromise = $('#splashVideo')
      .get(0)
      .play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          $('.preloader').addClass('transparent no-pointer-events');
        })
        .catch(() => {
          //autoplay forbidden
          $('.preloader .content').html(
            '<ion-icon name="play-circle" class="mr-3 small"></ion-icon>Click to start'
          );
          $('.preloader').on('click', function() {
            $('#splashVideo')
              .get(0)
              .play();
            $('.preloader').addClass('transparent no-pointer-events');
          });
        });
    }

    $('#splashVideo').on('ended', function() {
      $('#headerCol1').removeClass('push-right');
      $('#headerCol2').removeClass('transparent push-right');
      $('#headerCol3').removeClass('transparent push-right');
      $('.phone.video .playButton').removeClass('transparent');

      students.start();
      screens.start();
      studentsTest.start();
    });
  }, 300);
}
