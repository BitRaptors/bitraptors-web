(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(e,n,o){"use strict";o.r(n),function(e){o("SYky");var n=o("8I3Y"),t=o.n(n),i=(o("hZTp"),document.getElementsByClassName("hero-phone"));new t.a(i,{orientation:"up",overflow:!0,delay:.6,transition:"cubic-bezier(0,0,0,1)"}),new t.a(document.getElementsByClassName("macbook"),{orientation:"up",overflow:!0,delay:.2,transition:"cubic-bezier(0,0,0,1)"}),e("#alert").click(function(){alert("jQuery works!")}),e(window).scroll(function(){var n=e(window).scrollTop();n<200?e(".navbar-brand").addClass("hidden"):e(".navbar-brand").removeClass("hidden");var o=!1;e(".color").each(function(){var t=e(this),i=t.offset().top+t.outerHeight();t.offset().top-n<40&&i-n>40&&(o=!0)}),o?e(".navbar").addClass("navbar-dark"):e(".navbar").removeClass("navbar-dark")}),e(".iphoneX.video").click(function(n){var o=e(n.target),t=o.find("video").get(0),i=o.find(".playButton");t.paused?(t.play(),i.addClass("hidden")):(t.pause(),i.removeClass("hidden"))}),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0),t=n.find(".playButton");o.onplay=function(n){console.log(e(n.target)),t.addClass("hidden")}}),e(document).ready(function(){var e=[].slice.call(document.querySelectorAll("img.lazy")),n=[].slice.call(document.querySelectorAll("video.lazy")),o=!1,t=function t(){!1===o&&(o=!0,setTimeout(function(){e.forEach(function(o){o.src=o.dataset.src,o.classList.remove("lazy"),0===(e=e.filter(function(e){return e!==o})).length&&0===n.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t))}),n.forEach(function(e){e.poster=e.dataset.poster,e.classList.remove("lazy"),0===(n=n.filter(function(n){return n!==e})).length&&0===n.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t))}),o=!1},200))};t(),document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationchange",t)}),window.copyToClipboard=function(n,o){o.innerHTML="Email copied!",setInterval(function(){o.innerHTML="Copy email"},1500);var t=e("<input>");e("body").append(t),t.val(e(n).text()).select(),document.execCommand("copy"),t.remove()}}.call(this,o("EVdn"))},hZTp:function(e,n,o){}},[["e6Wu",1,2]]]);