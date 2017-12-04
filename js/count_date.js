var countDate = new Date("Jan 25 ,2018 4:9:00").getTime();
	var x = setInterval(function() {
		var nowDate = new Date().getTime();
		var distance = countDate - nowDate;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 *24))/(1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		if (seconds < 10) {
			seconds= '0' + seconds;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (days < 10) {
			days = "0" + days;
		}
		$(".header_timerItem-days").html("<p>" + days + "</p>" + "<p>" + "days" + "</p>");
		$(".header_timerItem-hours").html("<p>" + hours + "</p>" + "<p>" + "hours" + "</p>");
		$(".header_timerItem-minutes").html("<p>" + minutes + "</p>" + "<p>" + "minutes" + "</p>");
		$(".header_timerItem-seconds").html("<p>" + seconds + "</p>" + "<p>" + "seconds" + "</p>");
		
		if (distance < 0) {
			
			clearInterval(x);
			$(".header_timer").hide()};
},1000);