

$(document).on("pagebeforeshow", "#pageProductDetail", function (event, data) {
	
	var parameters = $(this).data("url").split("?")[1];
	var parameters2 = parameters.split("&");
	var searchvalue = "";
	var htmlstr = "";
	
	$.each(parameters2, function(key, value){
		
		var details = this.split("=");
		
		if (details[0] == "search"){

			searchvalue = details[1];
			$.data(document, "pid", searchvalue)
			
		} else if (details[0] == "cat"){
			
			$.data(document, "cat", details[1]);
			
		} else if (details[0] == "name"){
				
			$.data(document, "data_name", details[1]);

		} else if (details[0] == "quantity"){
			
			$.data(document, "data_quantity", details[1]);

		} else if (details[0] == "price"){
			
			$.data(document, "data_price", details[1]);

		} else if (details[0] == "image"){
			
			$.data(document, "data_image", details[1]);

		}
		
	});
 
	//alert($.data(document, "userid"));

	var objJSON;
	
		$.getJSON("products.txt", function(data){

			$.each(data, function(key, value) {

				$.each(value, function(key2, value2) {

					objJSON = value2;

					if (objJSON.id == searchvalue){
						
						htmlstr += '<img src="img/' + objJSON.image + '"><h2>' + objJSON.name + '</h2><p><b>Product No:</b> ' + objJSON.id + '</p><p><b>Quantity:</b> ' + objJSON.quantity + '</p><p><b>Price:</b> ' + objJSON.price + '</p>';

					};

				});

			});
		
			$("#productdetails").html(htmlstr);
			
		});

});
