var itemspaces = [];
var $espacioLista;
var botonFunctions = false;

$(document).ready( function(){
	$espacioLista = $('#items');
	$('#botonItem').click(addNewItem);
	//$('#nuevaLista').click(newCompleteList);
});

function addNewItem(){
	var input = prompt('Nuevo elemento de la lista:');
	$espacioLista.append('<li><img src="img/cross.png" alt="not done"><h4>'+input+'</h4><button class="modify">Cambiar</button><button class="delete">Quitar</button></li>');
	$('.modify').click(modify);
	$('.delete').click(deleteIt);
}


function modify(input) {
	var input = prompt('Ingrese el nuevo contenido:');
	$(this).parent().children('h4').html(input);
};
function deleteIt() {
	$(this).parent().remove();
};

