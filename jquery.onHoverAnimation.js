// ������ �������� �������� �� ��������� ������������������ �����������
//
// jQuery > 1.7
//
// .width � ������ �����;
// .frames � ���������� ������, � 0;
// .objAnimated � ��������; �����������, ���� ������� � ����������� ����� ������� ���������, � ������� ����������� ������;
// .duration � ������������ �����
// .parent � .parentConditions � ���������; �����������, ����� �������� ��������� �������� � �� ������
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
// ~������ �������� �������� �� ��������� ������������������ ����������� 