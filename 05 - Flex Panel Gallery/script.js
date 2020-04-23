document.querySelector('.panels').style.display = 'flex';
let panel = document.querySelectorAll('.panel');


    for (let i=0; i < panel.length; i++) {
        panel[i].addEventListener ('mouseover', () => {
        panel[i].classList.toggle('open')
        })
    }
    for (let i=0; i < panel.length; i++) {
        panel[i].addEventListener ('mouseout', () => {
        panel[i].classList.toggle('open')
        })
        
    }
   
    
function active(event) {
    if(event.propertyName.includes('flex')) { //flex-grow
    this.classList.toggle('open-active');
    }
}
panel.forEach(panel => panel.addEventListener('transitionstart', active));
