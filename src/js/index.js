import 'bootstrap';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

$(window).scroll(function() {
  var a = $(window).scrollTop();
  if (a < 200) {
    $('.raptor-logo-top').addClass('hidden');
  } else {
    $('.raptor-logo-top').removeClass('hidden');
  }
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

$(document).ready(function() {
  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  let lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'));
  let active = false;
  const lazyLoad = function() {
    if (active === false) {
      active = true;
      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          lazyImage.src = lazyImage.dataset.src;

          lazyImage.classList.remove('lazy');

          lazyImages = lazyImages.filter(function(image) {
            return image !== lazyImage;
          });

          if (lazyImages.length === 0 && lazyVideos.length === 0) {
            document.removeEventListener('scroll', lazyLoad);
            window.removeEventListener('resize', lazyLoad);
            window.removeEventListener('orientationchange', lazyLoad);
          }
        });
        lazyVideos.forEach(function(lazyVideo) {
          lazyVideo.poster = lazyVideo.dataset.poster;

          lazyVideo.classList.remove('lazy');

          lazyVideos = lazyVideos.filter(function(Video) {
            return Video !== lazyVideo;
          });

          if (lazyVideos.length === 0 && lazyVideos.length === 0) {
            document.removeEventListener('scroll', lazyLoad);
            window.removeEventListener('resize', lazyLoad);
            window.removeEventListener('orientationchange', lazyLoad);
          }
        });
        active = false;
      }, 200);
    }
  };

  document.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);
});
