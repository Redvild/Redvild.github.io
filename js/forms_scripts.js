$(function() {
      $('#form_sign .form-group').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
			success: function() {
				$('#form_sign').animate({height: "100px", fontSize:"1.2em"}, 500).html('<strong>Thanks for authorization on Envato Events</strong>').slideUp('10000');
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
				$("#submit_sponsor").html("Success").addClass("disabled");
				$("#modalForm").trigger("reset");
			}
        });
        e.preventDefault(); 
      });
		$("#Sponsor_Us_button").click(function(){
			$("#submit_sponsor").removeClass("disabled").html("Sponsor Us!").addClass('enabled');
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
				$("#swag_form").trigger("reset");
			}
        });
        e.preventDefault(); 
      });
		$("#bring_button").click(function(){
			$("#submit_swag").removeClass("disabled").html("Send").addClass('enabled');
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
				$("#form_message").trigger("reset");
			}
        });
        e.preventDefault(); 
      });
    });		