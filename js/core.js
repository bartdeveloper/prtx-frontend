$(document).ready(function() {

	const api = 'http://localhost:63793/api';

	$("#search").click(function(){
		
		searchProducts();

	});

	$("#query").on('input', function(){
		
		searchProducts();
		
	});

	function searchProducts(){

	}

});