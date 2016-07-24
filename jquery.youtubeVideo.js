/**
Author: login2030 (http://novostiva.ru/portfolio/)
Link: https://github.com/CenterAffiliatePrograms/youtube-iframe
Version: 0.0.1
License: MIT

videoId - Идентификатор видео
control - Показывать/скрывать элементы управления видео
rel - Показывать/скрывать показ похожих видео, после окончания ролика
info - Показывать/скрывать информацию о ролике
logo - Показывать/скрывать логотип youtube на элементах управления

*/
(function($) {
	jQuery.fn.youtubeVideo = function(param) {
		param = $.extend({
			videoId: '1blERxc-vyw',
			control: true,
			rel: true,
			info: true,
			logo: true
		}, param);
		var make = function() {
			var $this = $(this),
				after = $this.find('[data-class="after"]'),
				url = '';
			param.control = param.control ? 2 : 0;
			param.rel = param.rel ? 1 : 0;
			param.info = param.info ? 1 : 0;
			param.logo = param.logo ? 0 : 1;
			
			url = param.videoId + '?autoplay=1&autohide=1&rel=' + param.rel + '&showinfo=' + param.info + '&modestbranding=' + param.logo + '&controls=' + param.control;
			
			after.on('click', function(e) {
				var iframe = $('<iframe/>', {
					'frameborder': '0',
					'src': 'https://www.youtube.com/embed/'+ url,
					'width': $this.width(),
					'height': $this.height()
				});
				$this.html(iframe);
			});
		};

		return this.each(make);
	};
})(jQuery);