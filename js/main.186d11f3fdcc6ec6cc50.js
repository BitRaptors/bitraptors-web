(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(e,n,o){"use strict";o.r(n),function(e){o("SYky");var n=o("8I3Y"),t=o.n(n),i=(o("hZTp"),document.getElementsByClassName("hero-phone"));new t.a(i,{orientation:"up",overflow:!0,delay:.6,transition:"cubic-bezier(0,0,0,1)"}),new t.a(document.getElementsByClassName("macbook"),{orientation:"up",overflow:!0,delay:.2,transition:"cubic-bezier(0,0,0,1)"}),e("#alert").click(function(){alert("jQuery works!")});e(window).scroll(function(){e(window).scrollTop()<200?e(".navbar-brand").addClass("hidden"):e(".navbar-brand").removeClass("hidden");var n=!1;e(".color").each(function(){(function(n){var o=e(window).scrollTop(),t=n.offset().top+n.outerHeight();return n.offset().top-o<40&&t-o>40})(e(this))&&(n=!0)}),n?e(".navbar").addClass("navbar-dark"):e(".navbar").removeClass("navbar-dark"),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0);!function(n){var o=e(window).scrollTop(),t=n.offset().top+n.outerHeight();return n.offset().top-window.innerHeight-o<40&&t-o>40}(n)?o.paused||o.pause():o.paused&&o.play()})}),e(".iphoneX.video").click(function(n){var o=e(n.target),t=o.find("video").get(0),i=o.find(".playButton");t.paused?(t.play(),i.addClass("hidden")):(t.pause(),i.removeClass("hidden"))}),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0),t=n.find(".playButton");o.onplay=function(){t.addClass("hidden")}}),e(document).ready(function(){e(".headerApps").clone().appendTo(".header");var n=[].slice.call(document.querySelectorAll("img.lazy")),o=[].slice.call(document.querySelectorAll("video.lazy")),t=!1,i=function e(){!1===t&&(t=!0,setTimeout(function(){n.forEach(function(t){t.src=t.dataset.src,t.classList.remove("lazy"),0===(n=n.filter(function(e){return e!==t})).length&&0===o.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e))}),o.forEach(function(n){n.poster=n.dataset.poster,n.classList.remove("lazy"),0===(o=o.filter(function(e){return e!==n})).length&&0===o.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e))}),t=!1},200))};i(),document.addEventListener("scroll",i),window.addEventListener("resize",i),window.addEventListener("orientationchange",i)}),window.copyToClipboard=function(n,o){o.innerHTML="Email copied!",setInterval(function(){o.innerHTML="Copy email"},1500);var t=e("<input>");e("body").append(t),t.val(e(n).text()).select(),document.execCommand("copy"),t.remove()}}.call(this,o("EVdn"))},hZTp:function(e,n,o){}},[["e6Wu",1,2]]]);