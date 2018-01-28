
var source = $("#entry-template").html();
var template = Handlebars.compile(source);

var context = {
	enterprise: [
	{"name": "Stark Industries", "city": "New York" },
	{"name": "Jojo Land", "city": "Tokyo"}
	]
}

Handlebars.registerHelper("checkCity", function(city){
	if(city == "New York"){
		return "New York";
	} else {
		return "Tokyo";
	}
});

Handlebars.registerHelper("checkName", function(data, options){
	return options.fn(data);
});

var html = template(context);

$(document.body).append(html);
