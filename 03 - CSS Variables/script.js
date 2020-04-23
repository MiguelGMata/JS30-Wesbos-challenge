let spacing = document.getElementById('spacing');
let img = document.getElementsByTagName('img');
spacing.addEventListener('input', ()=> {
    img[0].style.setProperty('--spacing',spacing.value + 'px');
})

let blurry = document.getElementById('blur');
blurry.addEventListener('input', ()=> {
    img[0].style.setProperty('--blur', blurry.value + 'px');
})

let color = document.getElementById('base');
color.addEventListener('input', ()=> {
    img[0].style.setProperty('--base', color.value);
})