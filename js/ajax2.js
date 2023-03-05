$(document).on("pagebeforeshow", "#page2", function (event, data) {
					
	var parameters = $(this).data("url").split("?")[1];
	var searchvalue = parameters.split("=")[1];	
	var htmlstr = "";
	var objJSON = "";

		$.getJSON("products.txt", function(data){

			$.each(data, function(key, value) {

				if (((key).toLowerCase()).search(searchvalue.toLowerCase()) != -1){
					
					$.each(value, function(key2, value2) {

						objJSON = value2;

							htmlstr += '<li cat="' + key + '" data="' + objJSON.id + '" data-name="' + objJSON.name + '" data-quantity="' + objJSON.quantity + '" data-price="' + objJSON.price + '" data-image="' + objJSON.image + '"><a href="#"><img src="img/' + objJSON.image + '"><h2>' + objJSON.name + '</h2><p><b>Product No:</b> ' + objJSON.id + '</p><p><b>Quantity:</b> ' + objJSON.quantity + '</p><p><b>Price:</b> ' + objJSON.price + '</p></a></li>';

					});
				
				};
				
			});

			$("#productlist").html(htmlstr);
			$('#productlist').listview('refresh');
			
		});

});

$(document).ready(function(){
	
	$(document).on("click", "#productlist li", function(){
		
		//alert($(this).attr("data"));
		$.mobile.changePage('product_detail.htm', {dataUrl : "product_detail.htm", data : { 'search' : $(this).attr("data"), 'cat' : $(this).attr("cat"), 'quantity' : $(this).attr("data-quantity") , 'price' : $(this).attr("data-price") , 'image' : $(this).attr("data-image") , 'name' : $(this).attr("data-name") }, reloadPage : true, changeHash : true });
		
	});	
	
});