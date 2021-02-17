function myLoadFunction() {
    var element = document.getElementById('module');
    element.firstChild.nodeValue = 'My Module';
    var element = document.getElementById('content');
    element.firstChild.nodeValue = 'My Paragraph';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   