$(document).ready(function() {

	const api = 'http://localhost:63793/api';

	$("#search").click(function(){
		
		searchProducts();

	});

	$("#query").on('input', function(){
		
		searchProducts();
		
	});

	function searchProducts(){
        
        let query = $("#query").val();

		fetch(`${api}/search/?query=${query}`)
		.then(resp => resp.json())
		.then(resp => {

			$("#result").html("");

			if(resp.length == 0){

				$("#result").html('<p class="alert alert-warning">There is no results.</strong></p>');

			} else {

				resp.forEach(product => {

					$("#result").append(`<div class="item col-md-12">
											<p><strong>${product.name}</strong></p>
											<p><em>${product.description}</em></p>
										</div>`);
				});

			}

		})
		.catch(error => {
			$("#result").html('<p class="alert alert-danger">Something gone wrong...</p>');
			console.error("Err: ", error);
		});
	}

});