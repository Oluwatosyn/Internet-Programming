function changeH1(){
    var element = document.getElementById('module');
    element.firstChild.nodeValue = 'Internet Programming';
}
function changeP(){
    var element = document.getElementById('course');
    element.firstChild.nodeValue = 'Javascript';
}

function myLoadFunction() {
 var element = document.getElementById('module');
 element.addEventListener('click', changeH1);
 var element = document.getElementById('course');
 element.addEventListener('click', changeP);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
