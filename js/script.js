var itemspaces = [];
var $listaIncompletos;
var $listaCompletos;
var botonFunctions = false;

$(document).ready( function(){
	$listaIncompletos = $('#itemsIncompletos');
	$listaCompletos = $('#itemsCompletos');
	$('#botonItem').click(addNewItem);
	//$('#nuevaLista').click(newCompleteList);
	$listaIncompletos.on('click', 'li .modify', modify);
	$listaIncompletos.on('click', 'li .delete', deleteIt);
	$('#lista').on('click', 'li img', toggleCompletionState);
});

function addNewItem(){
	var input = prompt('Nuevo elemento de la lista:');
	$listaIncompletos.append('<li><img src="img/cross.png" alt="not done"><h4>'+input+'</h4><button class="modify">Cambiar</button><button class="delete">Quitar</button></li>');
}


function modify() {
	var input = prompt('Ingrese el nuevo contenido:');
	$(this).parent().children('h4').html(input);
};
function deleteIt() {
	$(this).parent().remove();
};
function toggleCompletionState() {
	if ($(this).attr('alt') == 'not done'){
		$(this).attr({'src':'img/check.png','alt':'done'});	
		$(this).parent().appendTo($listaCompletos);
	} else {
		$(this).attr({'src':'img/cross.png','alt':'not done'});
		$(this).parent().appendTo($listaIncompletos);
	}
}

