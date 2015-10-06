var num_clicks = 0;
var $click_counter = $("#click-int");

var will_scratch = function(count) {
	if (count % 5 === 0) {
		alert("*scratch*");
	}
};


$("#cat-img").click(function(e) {
	num_clicks++;
	console.log(num_clicks);
	console.log("string " + num_clicks.toString());
	$click_counter.text(num_clicks.toString());
	will_scratch(num_clicks);
});
