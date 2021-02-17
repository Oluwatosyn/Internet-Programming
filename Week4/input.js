function pressFunction() {
 var element = document.getElementById('myinput');
 alert(element.value);
}
function myLoadFunction() {
 var element = document.getElementById('mybutton');
 element.addEventListener('click', pressFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);


