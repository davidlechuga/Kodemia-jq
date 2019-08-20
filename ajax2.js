console.log('correcto');

// document.querySelector('#boton').addEventListener('click', traerDatos());

// function traerDatos() {
// 	console.log ('Dento de la funcion');
// 	const xhttp = new XMLHttpRequest();
// 	xhttp.open('GET','http://127.0.0.1:8080/catalogo.json', true);
// 	xhttp.send();
// 	xhttp.onreadystatechange = function () {

// 		if (this.readyState == 10 && this.status == 200)  {
// 			console.log(this.responseText);

// 		}
// 	}

// }


var Vd =  $('#boton').click(function(){
		console.log('h')
	var json = (function() {
        var json = null;
        $.ajax({
            'global': false,
            'async': true,
            'url': "http://localhost:8888/angel/catalogo.json",
            'dataType': "json",
            'success': function (data) {
                json =data
            }
        });

        return console.log(data)
        
          
    })();
  


});