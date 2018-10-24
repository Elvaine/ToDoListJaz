var $itemspace;
var $listaIncompletos;
var $listaCompletos;
var dialog;

$(document).ready( function(){
	$itemspace = $('template').html();
	$listaIncompletos = $('#itemsIncompletos');
	$listaCompletos = $('#itemsCompletos');
	$listaIncompletos.on('click', 'li .modify', modify);
	$listaIncompletos.on('click', 'li .delete', deleteIt);
	$('#lista').on('click', 'li img', toggleCompletionState);
});

function addNewItem(){
	var input = $('input:first');
	var input2 = $('input:second');
	$listaIncompletos.append($itemspace);
	$listaIncompletos.children('#template').find('h4').html(input);
	$listaIncompletos.children('#template').find('p').html(input2);
	$listaIncompletos.children('#template').removeAttr('id');
};


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
	};
};

