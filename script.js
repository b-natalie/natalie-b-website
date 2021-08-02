const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";
document.querySelector('body').appendChild(h2);

const showDescription = document.getElementsByClassName('div');
showDescription.addEventListener('hover', function(e) {
    document.toggleClass('show-description');
})