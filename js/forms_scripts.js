$(function() {
      $('#Event_Details').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$('#Event_Details').animate({height: "100px", fontSize:"1.2em"}, 500).html('<strong>Thanks for authorization on Envato Events</strong>').slideUp('10000');
			}
        });
        e.preventDefault(); 
      });
    });	 
	$(function() {
		$("#modalForm").submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$("#submit_sponsor").html("Success").addClass('disabled');
			}
        });
        e.preventDefault(); 
      });
    });		
	$(function() {
		$("#swag_form").submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$("#submit_swag").html("Success").addClass('disabled');
			}
        });
        e.preventDefault(); 
      });
    });		
			 $(function() {
		$("#form_message").submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$("#submit_message").html("Success").addClass('disabled');
			}
        });
        e.preventDefault(); 
      });
    });		