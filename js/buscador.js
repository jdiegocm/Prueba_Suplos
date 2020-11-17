
$(".divider").show();
$(document).ready(function(){
listar_bienes();
	var Ciudades = [];
	var Tipos = [];

	$.getJSON("data-1.json", function(json){

		var datos = json.datos;
		let inicio = "";
		let img = "";

		for(i in datos)
		{

		   Ciudades.push(datos[i].Ciudad);
		   Tipos.push(datos[i].Tipo);


		 

		   inicio +=   `
		   <div class='card'>	
		   <div class="row">		
		   <div class="col-sm-6" sytle="text-align:center;">
                    <img src="img/home.jpg" style="width:170px;">
                </div>
		  		<div class="col-sm-6">
				<label id="direccion">Direccion: ${datos[i].Direccion}</label><br>
				<label id="ciudad">Ciudad: ${datos[i].Ciudad}</label><br>
				<label id="telefono">Telefono: ${datos[i].Telefono}</label><br>
				<label id="codigo_postal">Codigo Postal: ${datos[i].Codigo_Postal}</label><br>
				<label id="tipo">Tipo: ${datos[i].Tipo}</label><br>
				<label id="precio">Precio: ${datos[i].Precio}</label><br>
                <button class="btn btn-default" id="btn_tomar"
                data-1="${datos[i].Direccion}"
                data-2="${datos[i].Ciudad}"
                data-3="${datos[i].Telefono}"
                data-4="${datos[i].Codigo_Postal}"
                data-5="${datos[i].Tipo}"
                data-6="${datos[i].Precio}"
                >GUARDAR</button>
		 		</div>
		 	</div>	
		 	</div>	

		   `;

		   $(".result").html(inicio);
            

		} 
		var template_1 = '<option value="" selected>Elige una ciudad</option>';
		var template_2 = "";
		var template_3 = '<option value="">Elige un tipo</option>';
		var template_4 = "";
		var uniqs = Ciudades.filter(function(item, index, array) {
		  return array.indexOf(item) === index;
		})

		var uniqs_2 = Tipos.filter(function(item, index, array) {
		  return array.indexOf(item) === index;
		})

		uniqs.forEach((x)=>{

			template_2 += 
			`
			<option value="${x}">${x}</option>

			`;
		});

		$("#selectCiudad").html(template_1+template_2);


		uniqs_2.forEach((x)=>{

			template_4 += `

			<option value="${x}">${x}</option>

			`;

		});

		$("#selectTipo").html(template_3+template_4);

	});
})


$("#formulario").submit(function(e){
    
	e.preventDefault();
        
		var precio_2 = [];
		let ciudad = $("#selectCiudad").val();
		let tipo = $("#selectTipo").val();
		let precio = $("#rangoPrecio").val();
        
    
		var nombres = precio.split(";");

		let primer_rango = nombres[0];
		let segundo_rango = nombres[1];
    
    
  

        const datos = {
            ciudad,
            tipo,
            primer_rango,
            segundo_rango
        }
    
		let resultados = "";	

	$.getJSON("data-1.json", function(json){

		var datos = json.datos;
		for(i in datos)
		{

		   if(datos[i].Ciudad == ciudad && datos[i].Tipo == tipo  && datos[i].Precio >= "$"+primer_rango && datos[i].Precio <= "$"+segundo_rango){

		   		resultados +=
		   		 `<div class='card'>	
		          <div class="row">		
		          <div class="col-sm-6" sytle="text-align:center;">
                    <img src="img/home.jpg" style="width:170px;">
                    </div>
		  		  <div class="col-sm-6">
				<label>Direccion: ${datos[i].Direccion}</label><br>
				<label>Ciudad: ${datos[i].Ciudad}</label><br>
				<label>Telefono: ${datos[i].Telefono}</label><br>
				<label>Codigo Postal: ${datos[i].Codigo_Postal}</label><br>
				<label>Tipo: ${datos[i].Tipo}</label><br>
				<label>Precio: ${datos[i].Precio}</label><br>
                <button class="btn btn-default" id="btn_tomar"
                data-1="${datos[i].Direccion}"
                data-2="${datos[i].Ciudad}"
                data-3="${datos[i].Telefono}"
                data-4="${datos[i].Codigo_Postal}"
                data-5="${datos[i].Tipo}"
                data-6="${datos[i].Precio}"
                >GUARDAR</button>
		 		</div>
		 	</div>	
		 	</div>	
		   			
		   		`;

		   	$(".result").html(resultados);	
		   }
		}
	});	 

});


$(document).on('click','#btn_tomar',function(){
    //rescatando los datos del click
    let direccion = $(this).attr('data-1');
    let ciudad = $(this).attr('data-2');
    let telefono = $(this).attr('data-3'); 
    let codigo_postal = $(this).attr('data-4');
    let tipo = $(this).attr('data-5');
    let precio = $(this).attr('data-6');
    
    const datos = {
        direccion,
        ciudad,
        telefono,
        codigo_postal,
        tipo ,
        precio
    }
    
    $.post('envia_bienes.php',datos,function(e){
           listar_bienes();
           });   
});


    function listar_bienes(){
        
        $.ajax({
           type:'POST',
           url: 'listar_bienes.php',
        success:function(response){
            let traer = JSON.parse(response);
            let template = "";
            let img = "";
            
            traer.forEach((x)=>{
               template += `

            <div class='card'>	
		      <div class="row">		
		          <div class="col-sm-6" sytle="text-align:center;">
                        <img src="img/home.jpg" style="width:170px;">
                    </div>
		  		  <div class="col-sm-6">
				    <label>Direccion: ${x.direccion}</label><br>
				    <label>Ciudad: ${x.ciudad}</label><br>
				    <label>Telefono: ${x.tel}</label><br>
				    <label>Codigo Postal: ${x.codigo_postal}</label><br>
				    <label>Tipo: ${x.tipo}</label><br>
				    <label>Precio: ${x.precio}</label><br>
		 		   </div>
		 	    </div>	
		 	</div>
              `; 
                
            });
            
            $("#traer_bienes").html(template);
        }
            
        });
    }




