// Declaración de variables
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let moun_be = document.getElementById('moun_be');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let moun_fr = document.getElementById('moun_fr');

//Función
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    moun_be.style.top = value * 0.5 + 'px';
    moun_fr.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

