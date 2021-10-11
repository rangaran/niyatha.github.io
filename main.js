//Select element function
const selectElement = function(element){
return document.querySelector(element);

};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let nav = selectElement('.nav-list');
menuToggler.addEventListener('click',function(){
body.classList.toggle('open');

});
nav.addEventListener('click',function(){
    body.classList.toggle('open');
    
    });

window.sr=ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 800,
    distance: '25rem',
    delay:400
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 800,
    distance: '25rem',
    delay:400
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 800,
    distance: '25rem',
    delay:400
});

