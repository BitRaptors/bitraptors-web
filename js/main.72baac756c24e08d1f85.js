(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(e,n,o){"use strict";o.r(n),function(e){o("SYky");var n,t,a,i,r,s=o("8I3Y"),d=o.n(s);o("tjRy"),o("ehPZ"),o("hZTp");e(window).scroll(function(){e(window).scrollTop()<200?(e(".navbar-brand").addClass("hidden"),e(".navbar").addClass("hidden")):(e(".navbar-brand").removeClass("hidden"),e(".navbar").removeClass("hidden"));var n=!1;e(".color, .color2").each(function(){(function(n){var o=e(window).scrollTop(),t=n.offset().top+n.outerHeight();return n.offset().top-o<40&&t-o>40})(e(this))&&(n=!0)}),n?e(".navbar").addClass("navbar-dark"):e(".navbar").removeClass("navbar-dark"),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0);!function(n){var o=e(window).scrollTop(),t=n.offset().top+n.outerHeight();return n.offset().top-window.innerHeight-o<40&&t-o>40}(n)?o.paused||o.pause():o.paused&&o.play()})}),e(".iphoneX.video").click(function(n){var o=e(n.target),t=o.find("video").get(0),a=o.find(".playButton");t.paused?(t.play(),a.addClass("hidden")):(t.pause(),a.removeClass("hidden"))}),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0),t=n.find(".playButton");o.onplay=function(){t.addClass("hidden")}}),e(document).ready(function(){}),window.copyToClipboard=function(n,o){o.innerHTML="Email copied!",setInterval(function(){o.innerHTML="Copy email"},1500);var t=e("<input>");e("body").append(t),t.val(e(n).text()).select(),document.execCommand("copy"),t.remove()},e(function(){e(".headerApps").clone().appendTo(".header"),e(".header").clone().insertBefore(".header").addClass("blurred");var o=[].slice.call(document.querySelectorAll("img.lazy")),s=[].slice.call(document.querySelectorAll("video.lazy")),l=!1,c=function e(){!1===l&&(l=!0,setTimeout(function(){o.forEach(function(n){n.src=n.dataset.src,n.classList.remove("lazy"),0===(o=o.filter(function(e){return e!==n})).length&&0===s.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e))}),s.forEach(function(n){n.poster=n.dataset.poster,n.classList.remove("lazy"),0===(s=s.filter(function(e){return e!==n})).length&&0===s.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e))}),l=!1},200))};c(),document.addEventListener("scroll",c),window.addEventListener("resize",c),window.addEventListener("orientationchange",c);var u=document.getElementsByClassName("hero-phone");n=new d.a(u,{orientation:"up",overflow:!0,delay:.6,transition:"cubic-bezier(0,0,0,1)"}),t=new d.a(document.getElementsByClassName("macbook"),{orientation:"up",overflow:!0,delay:.2,transition:"cubic-bezier(0,0,0,1)"}),a=new d.a(document.getElementsByClassName("parallax1"),{orientation:"up",overflow:!0,scale:1.6,transition:"cubic-bezier(0,0,0,1)"}),i=new d.a(document.getElementsByClassName("parallax2"),{orientation:"up",overflow:!0,scale:1.4,transition:"cubic-bezier(0,0,0,1)"}),r=new d.a(document.getElementsByClassName("parallax3"),{orientation:"up",overflow:!0,scale:1.8,transition:"cubic-bezier(0,0,0,1)"}),setTimeout(function(){n.refresh(),t.refresh(),a.refresh(),i.refresh(),r.refresh()},1e3)})}.call(this,o("EVdn"))},hZTp:function(e,n,o){}},[["e6Wu",1,2]]]);