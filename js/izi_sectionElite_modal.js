$(document).on('click', '.sectionElite_trigger', function (event) {
    event.preventDefault();
    $('#sectionElite_modal').iziModal('open', this);
});
 $("#sectionElite_modal").iziModal({
			  title: 'Send your email',
			  fullscreen: false,
			  headerColor: '#90d23d',
			  overlayColor: 'rgba(0, 0, 0, 0.4)',
			  iconColor: '',
			  iconClass: 'icon-chat',
	 		bodyOverflow: true,
	 		zIndex: '999',
});