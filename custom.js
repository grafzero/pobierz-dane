$(function(){
	
	$("#downloadData").click(function(){
		console.log('click');
    $.ajax({url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", success: function(result){
        $("#devData").html(result);
		console.log(result);
    }});
	
	});
	
	
	
});