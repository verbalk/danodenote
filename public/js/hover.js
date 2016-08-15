$(document).ready(function(){
	$("#hover-effect").hover(function(){
		$(this).addClass("acac");
		}, function(){
		$(this).addClass("bcbc");
	});
});