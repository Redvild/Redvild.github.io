$(function() {
      $('.sectionWelcome_formSign').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$('.sectionWelcome_formSign').slideUp('10000');
			}
        });
        e.preventDefault(); 
      });
    });	