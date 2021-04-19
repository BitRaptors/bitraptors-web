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

  students = new countUpModule.CountUp('students', 10000, { separator: ' ' });
  screens = new countUpModule.CountUp('screens', 101);
  studentsTest = new countUpModule.CountUp('students-test', 50, {
    suffix: '+',
  });
}
export function corvinusLoaded() {
  $('body').removeClass('stop-scrolling');

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

      students.start();
      screens.start();
      studentsTest.start();
    });
  }, 300);
}
