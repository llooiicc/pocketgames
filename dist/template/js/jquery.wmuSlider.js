!function(h){h.fn.wmuSlider=function(f){f=h.extend({animation:"fade",animationDuration:600,slideshow:!0,slideshowSpeed:7e3,slideToStart:0,navigationControl:!0,paginationControl:!0,previousText:"Previous",nextText:"Next",touch:!1,slide:"article",items:1},f);return this.each(function(){var a,o,s,r=h(this),m=f.slideToStart,d=r.find(".wmuSliderWrapper"),c=r.find(f.slide),l=c.length,u=function(t,i,e){if(s)return!1;s=!0;var n=h(c[m=t]);r.animate({height:n.innerHeight()}),"fade"==f.animation?(c.css({position:"absolute",opacity:0}),n.css("position","relative"),n.animate({opacity:1},f.animationDuration,function(){s=!1})):"slide"==f.animation&&(i?0==t?d.animate({marginLeft:-r.width()/f.items*l},f.animationDuration,function(){d.css("marginLeft",0),s=!1}):(e||d.css("marginLeft",-r.width()/f.items*l),d.animate({marginLeft:-r.width()/f.items*t},f.animationDuration,function(){s=!1})):d.animate({marginLeft:-r.width()/f.items*t},f.animationDuration,function(){s=!1})),o&&o.find("a").each(function(i){i==t?h(this).addClass("wmuActive"):h(this).removeClass("wmuActive")}),r.trigger("slideLoaded",t)};if(f.navigationControl){var i=h('<a class="wmuSliderPrev">'+f.previousText+"</a>");i.click(function(i){i.preventDefault(),clearTimeout(a),0==m?u(l-1,!0):u(m-1)}),r.append(i);var t=h('<a class="wmuSliderNext">'+f.nextText+"</a>");t.click(function(i){i.preventDefault(),clearTimeout(a),m+1==l?u(0,!0):u(m+1)}),r.append(t)}if(f.paginationControl&&(o=h('<ul class="wmuSliderPagination"></ul>'),h.each(c,function(t){o.append('<li><a href="#">'+t+"</a></li>"),o.find("a:eq("+t+")").click(function(i){i.preventDefault(),clearTimeout(a),u(t)})}),r.append(o)),f.slideshow){var e=function(){m+1<l?u(m+1):u(0,!0),a=setTimeout(e,f.slideshowSpeed)};a=setTimeout(e,f.slideshowSpeed)}var n=function(){var i=h(c[m]);r.animate({height:i.innerHeight()}),"slide"==f.animation&&(c.css({width:r.width()/f.items}),d.css({marginLeft:-r.width()/f.items*m,width:r.width()*c.length}))};f.touch&&"slide"==f.animation&&(h.isFunction(h.fn.swipe)||h.ajax({url:"jquery.touchSwipe.min.js",async:!1}),h.isFunction(h.fn.swipe)&&r.swipe({triggerOnTouchEnd:!1,swipeStatus:function(i,t,e,n){clearTimeout(a),"move"!=t||"left"!=e&&"right"!=e?"cancel"==t?"right"==e&&0==m?d.animate({marginLeft:-l*r.width()/f.items},f.animationDuration):d.animate({marginLeft:-m*r.width()/f.items},f.animationDuration):"end"==t&&("right"==e?0==m?u(l-1,!0,!0):u(m-1):"left"==e?m+1==l?u(0,!0):u(m+1):d.animate({marginLeft:-m*r.width()/f.items},f.animationDuration)):"right"==e?0==m?d.css("marginLeft",-l*r.width()/f.items+n):d.css("marginLeft",-m*r.width()/f.items+n):"left"==e&&d.css("marginLeft",-m*r.width()/f.items-n)},allowPageScroll:"vertical"}));!function(){var i=h(c[m]);if(i.find("img").load(function(){d.show(),r.animate({height:i.innerHeight()})}),"fade"==f.animation)c.css({position:"absolute",width:"100%",opacity:0}),h(c[m]).css("position","relative");else if("slide"==f.animation){f.items>l&&(f.items=l),c.css("float","left"),c.each(function(i){h(this).attr("data-index",i)});for(var t=0;t<f.items;t++)d.append(h(c[t]).clone());c=r.find(f.slide)}n(),r.trigger("hasLoaded"),u(m)}(),h(window).resize(n),r.bind("loadSlide",function(i,t){clearTimeout(a),u(t)})})}}(jQuery);