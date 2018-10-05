var itemspaces = [];
var $espacioLista;

$(document).ready( function(){
	$espacioLista = $('#items');
	$('#botonItem').addEventListener('click', newItem);
});

function Item() {
	this.check = '<img alt="No completada" src="img/cross.png"';
	this.texto = prompt('Escriba el elemento que quiere agregar a la lista.');
	this.button1 = '<button>Editar</button>';
	this.button2 = '<button>Quitar</button>';
}

function newItem() {
	var itemLocal = new Item();
	$itemspaces.push('a');
	var pos = $itemspaces.indexOf('a');
	$espacioLista.innerHTML += '\n<li id="item'pos'">'+itemLocal.check+itemLocal.texto+itemLocal.button1+itemLocal.button2+'</li>';
	$itemspaces[pos] = $('#item'+pos);
}