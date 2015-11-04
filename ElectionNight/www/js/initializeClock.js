function initializeClock(id, endtime){
	var clock  = document.getElementById(id);
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		clock.innerHTML = 'hours: ' + t.hours + <br> +
						  'minutes: ' + t.minutes + <br> +
						  'seconds: ' + t.seconds;
	    if(t.total <= 0){
			clearInterval(timeinterval);
			}
	},1000);
}