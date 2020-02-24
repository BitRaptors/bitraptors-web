import 'bootstrap';
import simpleParallax from 'simple-parallax-js';

import '../scss/index.scss';

var image = document.getElementsByClassName('hero-phone');
new simpleParallax(image, {
  orientation: 'up',
  overflow: true,
  delay: 0.6,
  transition: 'cubic-bezier(0,0,0,1)',
});

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
  $('.color').each(function() {
    var color = $(this);
    var bottom = color.offset().top + color.outerHeight();
    if (color.offset().top - a < 40 && bottom - a > 40) {
      $('.navbar').addClass('navbar-dark');
    } else {
      $('.navbar').removeClass('navbar-dark');
    }
  });
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
  lazyLoad();

  document.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);
});

window.copyToClipboard = (element, target) => {
  target.innerHTML = 'Email copied!';
  setInterval(function() {
    target.innerHTML = 'Copy email';
  }, 1500);
  var $temp = $('<input>');
  $('body').append($temp);
  $temp.val($(element).text()).select();
  document.execCommand('copy');
  $temp.remove();
};
