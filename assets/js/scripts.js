$(document).ready(function(){function e(e){$(".overlayImage").each(function(e,a){this.remove()}),$("#language-image").remove();var a="/assets/images/theme/"+e+"-editor.png",t="/assets/images/theme/"+e+"-editor.png, /assets/images/theme/"+e+"-editor@2x.png 2x";$("<img class='fadeIn animated overlayImage' id='language-image' src="+a+"/>").appendTo(".selected-editor"),$(".overlayImage").attr("srcset",t),$(".overlayImage").attr("data-id",e),$(".language-option").each(function(e){$(this).attr("data-id")==$("#language-image").attr("data-id")?$(this).addClass("active"):$(this).removeClass("active")})}function a(e){"vscode"==e?($(".icon-package").addClass("hidden"),$(".icon-package-code").removeClass("hidden"),$(".ui-theme").addClass("hidden"),$(".syntax-theme").addClass("hidden"),$(".syntax-theme-code").removeClass("hidden"),$(".syntax-theme-sublime").addClass("hidden")):"sublime"===e?($(".icon-package").addClass("hidden"),$(".icon-package-code").addClass("hidden"),$(".ui-theme").addClass("hidden"),$(".syntax-theme").addClass("hidden"),$(".syntax-theme-code").addClass("hidden"),$(".syntax-theme-sublime").removeClass("hidden")):($(".icon-package").removeClass("hidden"),$(".icon-package-code").addClass("hidden"),$(".ui-theme").removeClass("hidden"),$(".syntax-theme").removeClass("hidden"),$(".syntax-theme-code").addClass("hidden"),$(".syntax-theme-sublime").addClass("hidden")),$(".editor-option").each(function(a){$(this).attr("data-id")==e?$(this).addClass("active"):$(this).removeClass("active")})}jQuery.fn.selectText=function(){this.find("input").each(function(){0!=$(this).prev().length&&$(this).prev().hasClass("p_copy")||$('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this)),$(this).prev().html($(this).val())});var e=document,a=this[0];if(e.body.createTextRange)(s=document.body.createTextRange()).moveToElementText(a),s.select();else if(window.getSelection){var t=window.getSelection(),s=document.createRange();s.selectNodeContents(a),t.removeAllRanges(),t.addRange(s)}},$("#cli-syntax").click(function(e){$("#cli-syntax").selectText(),e.preventDefault()}),$("#cli-syntax-code").click(function(e){$("#cli-syntax-code").selectText(),e.preventDefault()}),$("#cli-sublime-mac").click(function(e){$("#cli-sublime-mac").selectText(),e.preventDefault()}),$("#cli-sublime-windows").click(function(e){$("#cli-sublime-windows").selectText(),e.preventDefault()}),$("#cli-icons").click(function(e){$("#cli-icons").selectText(),e.preventDefault()}),$("#cli-ui").click(function(e){$("#cli-ui").selectText(),e.preventDefault()}),$(this).scrollTop(0);var t=0;$(document).scroll(function(){t=$(this).scrollTop();var e=$(".syntax-theme").offset().top-128,a=$(".icon-package").offset().top-128,s=$(".ui-theme").offset().top-128;if(t>=e&&t<=a){var i=13-(r=a-t)/(g=a-e)*13,n=16-r/g*16,o=19-r/g*19,c=40-(m=Math.round(1*i)),d=49-(h=Math.round(1*n)),l=58-(p=Math.round(1*o));$("body").css("background-color","rgba("+c+","+d+","+l+", 0.94)"),$("#footer").css("background-color","rgba("+c+","+d+","+l+", 0.94)")}else if(t>=a&&t<=s){var r=s-t,g=s-a,i=26-r/g*26,m=Math.round(1*i),n=31-r/g*31,h=Math.round(1*n),o=36-r/g*36,p=Math.round(1*o),c=27-m,d=33-h,l=39-p;$("body").css("background-color","rgba("+c+","+d+","+l+", 0.94)"),$("#footer").css("background-color","rgba("+c+","+d+","+l+", 0.94)")}}),$(".language-option").click(function(a){var t=$(this).attr("data-id");setTimeout(e(t),0),a.preventDefault()}),$(".editor-option").click(function(e){var t=$(this).attr("data-id");setTimeout(a(t),0),e.preventDefault()}),function(){s=Math.floor(10*Math.random())+1;for(var e=[1e3,4e3,7e3,1e4,13e3],a=[function(){$("<img class='longDelayFadeIn active sass-icon-active' src=/assets/images/package/icons/sass-icon-active.svg />").appendTo(".sass")},function(){$("<img class='longDelayFadeIn active' src=/assets/images/package/icons/angular-icon-active.svg />").appendTo(".angular")},function(){$("<img class='longDelayFadeIn active' src=/assets/images/package/icons/image-icon-active.svg />").appendTo(".image")},function(){$("<img class='longDelayFadeIn active' src=/assets/images/package/icons/gulp-icon-active.svg />").appendTo(".gulp")},function(){$("<img class='longDelayFadeIn active' src=/assets/images/package/icons/pug-icon-active.svg />").appendTo(".pug")}],t=0;t<5;t++){var s=e[Math.floor(Math.random()*e.length)];setTimeout(a[t],s);var i=e.indexOf(s);i>-1&&e.splice(i,1)}}(),function(e){$(e).each(function(){$("<img/>")[0].src=this})}(["/assets/images/theme/html-editor@2x.png","/assets/images/theme/html-editor.png","/assets/images/theme/javascript-editor@2x.png","/assets/images/theme/javascript-editor.png","/assets/images/theme/json-editor@2x.png","/assets/images/theme/json-editor.png","/assets/images/theme/php-editor@2x.png","/assets/images/theme/php-editor.png","/assets/images/theme/python-editor@2x.png","/assets/images/theme/python-editor.png","/assets/images/theme/scss-editor@2x.png","/assets/images/theme/scss-editor.png"]);var s=$("#footer"),i=($("#toMorphSvg"),$("#toMorphSvg #first"),$("#toMorphSvg #second"),new SVGMorpheus("#toMorphSvg")),n={duration:250,easing:"quad-in-out",rotation:"none"};s.hover(function(e){i.to("second",n)},function(e){i.to("first",n)})});