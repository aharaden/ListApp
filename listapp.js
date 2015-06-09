function addItem(item) {

	//alert('addItem was called with value'+item);
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	var i = document.createElement("i");
	var trash = document.createElement("i");
	trash.setAttribute("class","fa fa-trash");
	i.setAttribute("class","fa-li fa fa-square-o");
	li.setAttribute("onclick","checkItem(this)");
	trash.setAttribute("onclick","deleteItem(this)");
	li.appendChild(i);
	li.appendChild(document.createTextNode(item));
	li.appendChild(trash);
	
	ul.appendChild(li);

}

function checkItem(item) {

	//alert(item.childNodes.length);
	var i = item.childNodes[0];
	i.setAttribute("class","fa-li fa fa-check-square-o");

}

function deleteItem(item) {
	//alert('Junk');
	var li = item.parentNode;
	var ul = li.parentNode;
	ul.removeChild(li);
}