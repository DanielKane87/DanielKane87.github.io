window.addEventListener("load", () => {
	clock();
	function clock() {
		let now = new Date();
		let past = new Date("July 18, 2003 17:33:00");
		let timeDifference = (now.getTime() - past.getTime());
		let yearDifference = Math.abs(Math.round(timeDifference / (1000 * 60 * 60 * 24) / 365.25));
		let dayDifference = Math.abs(Math.round(timeDifference / (1000 * 60 * 60 * 24)) % 365);
		let hourDifference = Math.abs(Math.round(timeDifference / (1000 * 60 * 60)) % 24);
		let minuteDifference = Math.abs(Math.round(timeDifference / (1000 * 60)) % 60);
                        
		let result = "";
		result+=yearDifference+" years ";
		result+=dayDifference+" days ";
		result+=hourDifference+" hours ";
		result+=minuteDifference+" minutes";
			
		document.getElementById("time").innerHTML = result;
		setTimeout(clock, 1000);
	}
});