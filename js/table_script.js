// JavaScript Document
	$(document).ready(function(){
		$(".sectionWelcome_tableHidden").hide();
		$("table td a").click(function(){
			if ($(this).parent().prev("td").children(".sectionWelcome_tableHidden").is(":hidden")) {
				$(this).children("i").removeClass("fa-plus-circle").addClass("fa-minus-circle")
			} else {
				$(this).children("i").removeClass("fa-minus-circle").addClass("fa-plus-circle")
			}
			$(this).parent().prev("td").children(".sectionWelcome_tableHidden").fadeToggle();
			return false;
		});
	});