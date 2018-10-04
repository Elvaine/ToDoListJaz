document.getElementById('botonItem').addEventListener('click', newItem);

function newItem() {
	var checkspace = document.getElementById('checks');
	var itemspace = document.getElementById('tareas');
	checkspace.innerHTML += '\n<li><img alt="Falta hacer" src="img/cross.png"></li>';
	itemspace.innerHTML += '\n<li><h4>'+prompt('Escriba el nuevo item de la lista.')+'</h4></li>';
}