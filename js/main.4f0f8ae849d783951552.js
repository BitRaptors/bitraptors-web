(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{e6Wu:function(e,n,o){"use strict";o.r(n),function(e){o("SYky");var n,t,a,r,i,s,l,c,d,u,p,f=o("8I3Y"),m=o.n(f),v=(o("tjRy"),o("ehPZ"),o("jB/O"));o("hZTp");function h(n){var o=e(n.currentTarget);console.log(n);var t=o.find("video").get(0),a=o.find(".playButton");t.paused?(t.play(),a.addClass("transparent")):(t.pause(),a.removeClass("transparent"))}e(window).scroll(function(){e(window).scrollTop()<200?(e(".navbar-brand").addClass("hidden"),e(".navbar").addClass("hidden")):(e(".navbar-brand").removeClass("hidden"),e(".navbar").removeClass("hidden"));var n=!1;e(".color, .color2").each(function(){(function(n){var o=e(window).scrollTop(),t=n.offset().top+n.outerHeight();return n.offset().top-o<40&&t-o>40})(e(this))&&(n=!0)}),n?e(".navbar").addClass("navbar-dark"):e(".navbar").removeClass("navbar-dark"),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0);!function(n){var o=e(window).scrollTop(),t=n.offset().top+n.outerHeight();return n.offset().top-window.innerHeight-o<40&&t-o>40}(n)?o.paused||o.pause():o.paused&&o.play()})}),e(document).ready(function(){-1!=document.URL.indexOf("corvinus")&&Object(v.a)(h)}),window.copyToClipboard=function(n,o){o.innerHTML="Email copied!",setInterval(function(){o.innerHTML="Copy email"},1500);var t=e("<input>");e("body").append(t),t.val(e(n).text()).select(),document.execCommand("copy"),t.remove()},e(function(){e(".headerApps").clone().appendTo(".header"),e(".header").clone().insertBefore(".header").addClass("blurred");var o=[].slice.call(document.querySelectorAll("img.lazy")),f=[].slice.call(document.querySelectorAll("video.lazy")),w=!1,b=function e(){!1===w&&(w=!0,setTimeout(function(){o.forEach(function(n){n.src=n.dataset.src,n.classList.remove("lazy"),0===(o=o.filter(function(e){return e!==n})).length&&0===f.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e))}),f.forEach(function(n){n.poster=n.dataset.poster,n.classList.remove("lazy"),0===(f=f.filter(function(e){return e!==n})).length&&0===f.length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e))}),w=!1},200))};b(),document.addEventListener("scroll",b),window.addEventListener("resize",b),window.addEventListener("orientationchange",b);var C=document.getElementsByClassName("hero-phone");n=new m.a(C,{orientation:"up",overflow:!0,delay:.6,transition:"cubic-bezier(0,0,0,1)"}),t=new m.a(document.getElementsByClassName("macbook"),{orientation:"up",overflow:!0,delay:.2,transition:"cubic-bezier(0,0,0,1)"}),a=new m.a(document.getElementsByClassName("parallaxn1"),{orientation:"down",overflow:!0}),r=new m.a(document.getElementsByClassName("parallaxn2"),{orientation:"down",overflow:!0,scale:1.6,transition:"cubic-bezier(0,0,0,1)"}),i=new m.a(document.getElementsByClassName("parallax1"),{orientation:"up",overflow:!0,scale:1.2,transition:"cubic-bezier(0,0,0,1)"}),s=new m.a(document.getElementsByClassName("parallax2"),{orientation:"up",overflow:!0,scale:1.4,transition:"cubic-bezier(0,0,0,1)"}),l=new m.a(document.getElementsByClassName("parallax3"),{orientation:"up",overflow:!0,scale:1.8,transition:"cubic-bezier(0,0,0,1)"}),c=new m.a(document.getElementsByClassName("parallaxl1"),{orientation:"left",overflow:!0,scale:1.2,transition:"cubic-bezier(0,0,0,1)"}),d=new m.a(document.getElementsByClassName("parallaxl2"),{orientation:"left",overflow:!0,scale:1.4,transition:"cubic-bezier(0,0,0,1)"}),u=new m.a(document.getElementsByClassName("parallaxl3"),{orientation:"left",overflow:!0,scale:1.6,transition:"cubic-bezier(0,0,0,1)"}),p=new m.a(document.getElementsByClassName("parallaxl4"),{orientation:"left",overflow:!0,scale:1.8,transition:"cubic-bezier(0,0,0,1)"}),e(".iphoneX.video").click(h),e(".iphoneX.video").each(function(){var n=e(this),o=n.find("video").get(0),t=n.find(".playButton");o.onplay=function(){t.addClass("hidden")}}),setTimeout(function(){n.refresh(),t.refresh(),a.refresh(),r.refresh(),i.refresh(),s.refresh(),l.refresh(),c.refresh(),d.refresh(),u.refresh(),p.refresh(),-1!=document.URL.indexOf("corvinus")&&Object(v.b)()},1e3)})}.call(this,o("EVdn"))},hZTp:function(e,n,o){},"jB/O":function(e,n,o){"use strict";(function(e){o.d(n,"a",function(){return s}),o.d(n,"b",function(){return l});var t,a,r,i=o("GiOn");function s(n){console.log("majom"),e("#splashVideo").get(0).pause(),e(".phone.video").click(n),e("body").addClass("stop-scrolling"),e(window).on("beforeunload",function(){e(window).scrollTop(0)}),t=new i.CountUp("students",11500,{separator:" "}),a=new i.CountUp("screens",101),r=new i.CountUp("students-test",50,{suffix:"+"})}function l(){e("body").removeClass("stop-scrolling"),setTimeout(function(){var n=e("#splashVideo").get(0).play();void 0!==n&&n.then(function(){e(".preloader").addClass("transparent no-pointer-events")}).catch(function(){e(".preloader .content").html('<ion-icon name="play-circle" class="mr-3 small"></ion-icon>Click to start'),e(".preloader").on("click",function(){e("#splashVideo").get(0).play(),e(".preloader").addClass("transparent no-pointer-events")})}),e("#splashVideo").on("ended",function(){e("#headerCol1").removeClass("push-right"),e("#headerCol2").removeClass("transparent push-right"),e("#headerCol3").removeClass("transparent push-right"),e(".phone.video .playButton").removeClass("transparent"),t.start(),a.start(),r.start()})},300)}}).call(this,o("EVdn"))}},[["e6Wu",1,2]]]);