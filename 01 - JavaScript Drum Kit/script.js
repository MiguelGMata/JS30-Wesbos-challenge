 function removeTransition(event) { //con esta funcion eliminamos el efecto
    if (event.propertyName !== 'transform') return; // tranform es el ultimo evento en realizarse en el efecto
    event.target.classList.remove('playing'); // eliminamos la clase playing
  }

  function playSound(event) {  //con esta funcion buscamos en keycode de la tecla para identificar que tecla fue presionada
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //con esto guardamos el audio en particular y con el event.keycode vemos el numero de la tecla y la guaramos en audio
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`); //para selecionar el div correspondiente al sonido

    if (!audio) return; // si hay audio  con el key selecionado sino sale de la funcion
    key.classList.add('playing'); //para tener la animacion de css
    audio.currentTime = 0; // con esto el sonido es reproducido cada vez que se toque la tecla
    audio.play(); //para que se toque el sonido
  }

  const keys = Array.from(document.querySelectorAll('.key')); //seleccionamos todos los key para luego
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));// llamamos al evento de eliminar la clase del efecto

  window.addEventListener('keydown', playSound); // escuchamos un evento y el tipo es un keydown cada vez que se presiona una tecla se escucha esta funcion