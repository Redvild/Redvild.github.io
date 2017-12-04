$('#sectionEvents_modal').on('click', function () {
	var swiper = new Swiper(".swiper-container", {
		centeredSlides: true,
		paginationClickable: true,
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
	});

});
		var mySwiper = documet.querySelector('.swiper-container').swiper
		mySwiper.slideNext();