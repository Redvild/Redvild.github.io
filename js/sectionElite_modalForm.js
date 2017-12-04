$(function() {
		$(".sectionElite_modalForm").submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$(".sectionElite_modalSubmit").html("Success").addClass("disabled");
				$(".sectionElite_modalForm").trigger("reset");
			}
        });
        e.preventDefault(); 
      });
		$(".sectionElite_button").click(function(){
			$(".sectionElite_modalSubmit").removeClass("disabled").html("Sponsor Us!");
		});
    });		