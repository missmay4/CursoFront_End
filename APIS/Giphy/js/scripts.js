$(document).ready(function(){
	

	$("#myButton").click(function() {
	// jQuery
		var gifs = $.get("http://api.giphy.com/v1/gifs/random?tag=we+bare+bears&api_key=dc6zaTOxFJmzC");
		gifs.done(function(response) {
			$("#container").attr("src", response.data.image_url);
			//console.log(response.data.image_mp4_url, response);
			//console.log("success got data", response);
		});
	});

/*	// Ajax
	$("#myButton").click(function() {
		var gifs = $.ajax({
    		url: "http://api.giphy.com/v1/gifs/random?tag=we+bare+bears",
    		method: "GET",
    		data: {api_key: "dc6zaTOxFJmzC"}
    	});
    	gifs.done(function(response) {
    		$("#container").attr("src", response.data.image_url);
				//console.log(response.data.image_mp4_url, response);
				//console.log("success got data", response);
    	});
	});
*/

});