$(function() {
		$(".sectionSponsors_modalForm").submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$(".sectionSponsors_modalSubmit").html("Success").addClass("disabled");
				$(".sectionSponsors_modalForm").trigger("reset");
			}
        });
        e.preventDefault(); 
      });
		$(".sectionSponsors_button").click(function(){
			$(".sectionSponsors_modalSubmit").removeClass("disabled").html("Sponsor Us!");
		});
    });		