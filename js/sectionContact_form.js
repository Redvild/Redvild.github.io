 $(function() {
		$(".sectionContact_form").submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$(".sectionContact_formSubmit").html("Success").addClass('disabled');
				$(".sectionContact_form").trigger("reset");
			}
        });
        e.preventDefault(); 
      });
    });	