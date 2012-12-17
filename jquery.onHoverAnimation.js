// плагин создания анимации из склеенной последовательности изображений
// 
// https://github.com/Ser-Gen/onHoverAnimation
//
// jQuery > 1.7
//
// .width — ширина кадра;
// .frames — количество кадров, с 0;
// .objAnimated — селектор; указывается, если элемент с анимируемым фоном потомок элементов, к которым применяется плагин;
// .duration — длительность кадра
// .parent и .parentConditions — селекторы; указываются, чтобы уточнить родителей элемента и их классы
(function($) {
  var defaults = {duration : '45'},
  options;
  $.fn.hoverAnimation = function (params) {
    options = $.extend({}, defaults, options, params);
    $(this).each(function(){
      var objThis = $(this), frame = 0, deltime,
      objAnimated = objThis;
      if (options.objAnimated !== undefined) {
        objAnimated = objThis.find(options.objAnimated);
      }
      objThis.on('mouseover', function(){
        if (
          ((options.parent === undefined) && (options.parentConditions === undefined))
          || ($(this).parents().find(options.parent).is(options.parentConditions))
        ) {
          clearInterval(deltime);
          deltime = setInterval(function () {
            frame++;
            if (frame > options.frames) {
              frame = 0;
            }
            objAnimated.css('background-position', (-1 * frame * options.width) + 'px 0');
          }, options.duration);
        }
      });
      objThis.on('mouseleave', function() {
        clearInterval(deltime);
        deltime = setInterval(function(){
          frame++;
          if (frame <= options.frames+1) {
            objAnimated.css('background-position', (-1 * frame * options.width) + 'px 0');
          }
        }, options.duration);
      });
    });
  };
})(jQuery);
// ~плагин создания анимации из склеенной последовательности изображений
