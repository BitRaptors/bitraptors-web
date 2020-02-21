import 'bootstrap';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

$(window).scroll(function() {
  var a = $(window).scrollTop();
  if (a < 200) {
    $('.navbar-brand').addClass('hidden');
  } else {
    $('.navbar-brand').removeClass('hidden');
  }
  console.log(a);
});

$('.iphoneX.video').click(function(e) {
  var target = $(e.target);
  var video = target.find('video').get(0);
  var playButton = target.find('.playButton');
  if (video.paused) {
    video.play();
    playButton.addClass('hidden');
  } else {
    video.pause();
    playButton.removeClass('hidden');
  }
});

// Your jQuery code
