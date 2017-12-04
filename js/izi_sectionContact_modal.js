 $(document).on('click', '.sectionContact_trigger', function (event) {
    event.preventDefault();
    $('#sectionContact_modalMap').iziModal('open', this);
});
 $("#sectionContact_modalMap").iziModal({
			  title: 'Map',
			  fullscreen: false,
			  headerColor: '#90d23d',
			  overlayColor: 'rgba(0, 0, 0, 0.4)',
			  iconColor: '',
			  iconClass: 'icon-chat',
	 		bodyOverflow: true,
	 		zIndex: '999',
});