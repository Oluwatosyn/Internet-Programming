function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';

    var element = document.getElementById('pageparagraph');
    element.firstChild.nodeValue = 'New Paragraph';
}
document.addEventListener('click', myLoadFunction);