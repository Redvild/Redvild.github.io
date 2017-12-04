 $(document).on('click', '.sectionEvents_trigger', function (event) {
    event.preventDefault();
    $('#sectionEvents_modal').iziModal('open', this);
});
 $("#sectionEvents_modal").iziModal({
			  title: 'View more',
			  fullscreen: true,
			  headerColor: '#90d23d',
			  overlayColor: 'rgba(0, 0, 0, 0.4)',
			  iconColor: '',
			  iconClass: 'icon-chat',
	 		bodyOverflow: true,
	 		zIndex: '999',
});