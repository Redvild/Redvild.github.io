 $(document).on('click', '.sectionSponsors_trigger', function (event) {
    event.preventDefault();
    $('#sectionSponsors_modal').iziModal('open', this);
});
 $("#sectionSponsors_modal").iziModal({
			  title: 'Sponsor us',
			  fullscreen: true,
			  headerColor: '#90d23d',
			  overlayColor: 'rgba(0, 0, 0, 0.4)',
			  iconColor: '',
			  iconClass: 'icon-chat',
	 		bodyOverflow: true,
	 		zIndex: '999',
});