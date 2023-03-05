$(document).ready(function(){

	$("#button").click(function(){
		
		var search = $("#search").val();
		
		$.mobile.changePage('index3.html', {dataUrl : "index3.html", data : { 'paremeter' : search }, reloadPage : true, changeHash : true });
		 
	});

	$("#selectproduct").change(function(){
		
		var search = $("#selectproduct").val();
		
		$.mobile.changePage('index2.html', {dataUrl : "index2.html", data : { 'paremeter' : search }, reloadPage : true, changeHash : true });
		 
	});

});