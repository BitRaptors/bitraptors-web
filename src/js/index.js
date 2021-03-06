import 'bootstrap';
import simpleParallax from 'simple-parallax-js';
import '../../node_modules/@fortawesome/fontawesome-free/js/solid.js';
import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js';
import { corvinus, corvinusLoaded } from './corvinus.js';

import '../scss/index.scss';

var inside = target => {
  var a = $(window).scrollTop();
  var bottom = target.offset().top + target.outerHeight();

  return target.offset().top - a < 40 && bottom - a > 40;
};

var insideWindow = target => {
  var a = $(window).scrollTop();
  var bottom = target.offset().top + target.outerHeight();
  return target.offset().top - window.innerHeight - a < 40 && bottom - a > 40;
};

$(window).scroll(function() {
  var a = $(window).scrollTop();
  if (a < 200) {
    $('.navbar-brand').addClass('hidden');
    $('.navbar').addClass('hidden');
  } else {
    $('.navbar-brand').removeClass('hidden');
    $('.navbar').removeClass('hidden');
  }
  var darkNavBar = false;
  $('.color, .color2').each(function() {
    var color = $(this);
    if (inside(color)) darkNavBar = true;
  });
  if (darkNavBar) {
    $('.navbar').addClass('navbar-dark');
  } else {
    $('.navbar').removeClass('navbar-dark');
  }

  $('.iphoneX.video').each(function() {
    var target = $(this);
    var video = target.find('video').get(0);
    if (insideWindow(target)) {
      if (video.paused) {
        video.play();
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  });
});

$(document).ready(function() {
  if (document.URL.indexOf('corvinus') != -1) {
    corvinus(playPause);
  }
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

var i1,
  i2,
  parallaxn1,
  parallaxn2,
  parallax1,
  parallax2,
  parallax3,
  parallaxl1,
  parallaxl2,
  parallaxl3,
  parallaxl4;
$(function() {
  $('.headerApps')
    .clone()
    .appendTo('.header');
  $('.header')
    .clone()
    .insertBefore('.header')
    .addClass('blurred');

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

        // i1.refresh();
        // i2.refresh();
        // i3.refresh();
      }, 200);
    }
  };
  lazyLoad();

  document.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);

  var image = document.getElementsByClassName('hero-phone');
  i1 = new simpleParallax(image, {
    orientation: 'up',
    overflow: true,
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)',
  });
  i2 = new simpleParallax(document.getElementsByClassName('macbook'), {
    orientation: 'up',
    overflow: true,
    delay: 0.2,
    transition: 'cubic-bezier(0,0,0,1)',
  });

  parallaxn1 = new simpleParallax(
    document.getElementsByClassName('parallaxn1'),
    {
      orientation: 'down',
      overflow: true,
    }
  );
  parallaxn2 = new simpleParallax(
    document.getElementsByClassName('parallaxn2'),
    {
      orientation: 'down',
      overflow: true,
      scale: 1.6,
      transition: 'cubic-bezier(0,0,0,1)',
    }
  );
  parallax1 = new simpleParallax(document.getElementsByClassName('parallax1'), {
    orientation: 'up',
    overflow: true,
    scale: 1.2,
    transition: 'cubic-bezier(0,0,0,1)',
  });
  parallax2 = new simpleParallax(document.getElementsByClassName('parallax2'), {
    orientation: 'up',
    overflow: true,
    scale: 1.4,
    transition: 'cubic-bezier(0,0,0,1)',
  });
  parallax3 = new simpleParallax(document.getElementsByClassName('parallax3'), {
    orientation: 'up',
    overflow: true,
    scale: 1.8,
    transition: 'cubic-bezier(0,0,0,1)',
  });

  parallaxl1 = new simpleParallax(
    document.getElementsByClassName('parallaxl1'),
    {
      orientation: 'left',
      overflow: true,
      scale: 1.2,
      transition: 'cubic-bezier(0,0,0,1)',
    }
  );
  parallaxl2 = new simpleParallax(
    document.getElementsByClassName('parallaxl2'),
    {
      orientation: 'left',
      overflow: true,
      scale: 1.4,
      transition: 'cubic-bezier(0,0,0,1)',
    }
  );
  parallaxl3 = new simpleParallax(
    document.getElementsByClassName('parallaxl3'),
    {
      orientation: 'left',
      overflow: true,
      scale: 1.6,
      transition: 'cubic-bezier(0,0,0,1)',
    }
  );
  parallaxl4 = new simpleParallax(
    document.getElementsByClassName('parallaxl4'),
    {
      orientation: 'left',
      overflow: true,
      scale: 1.8,
      transition: 'cubic-bezier(0,0,0,1)',
    }
  );

  $('.iphoneX.video').click(playPause);

  $('.iphoneX.video').each(function() {
    var target = $(this);
    var video = target.find('video').get(0);
    var playButton = target.find('.playButton');
    video.onplay = function() {
      playButton.addClass('hidden');
    };
  });

  setTimeout(function() {
    //for some reason simpleparallax doesnt update itself before..
    i1.refresh();
    i2.refresh();
    parallaxn1.refresh();
    parallaxn2.refresh();
    parallax1.refresh();
    parallax2.refresh();
    parallax3.refresh();
    parallaxl1.refresh();
    parallaxl2.refresh();
    parallaxl3.refresh();
    parallaxl4.refresh();

    if (document.URL.indexOf('corvinus') != -1) {
      corvinusLoaded();
    }
  }, 1000);
});

function playPause(e) {
  var target = $(e.currentTarget);
  console.log(e);
  var video = target.find('video').get(0);
  var playButton = target.find('.playButton');
  if (video.paused) {
    video.play();
    playButton.addClass('transparent');
  } else {
    video.pause();
    playButton.removeClass('transparent');
  }
}
