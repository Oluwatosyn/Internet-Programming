function pressFunction() {
 var element = document.getElementById('myinput');
 var div = document.getElementById('result');
 div.firstChild.nodeValue = element.value;
}
function myLoadFunction() {
 var element = document.getElementById('myinput');
 element.addEventListener('keyup', pressFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);