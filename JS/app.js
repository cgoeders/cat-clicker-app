var num_clicks = 0;
var $click_counter = $("#click-int");

$("#cat-img").click(function(e) {
	num_clicks++;
	console.log(num_clicks);
	console.log("string " + num_clicks.toString());
	$click_counter.text(num_clicks.toString());
});
