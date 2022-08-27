const refs = {
    bodyBC:document.querySelector('body'),    
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
};
 
refs.buttonStart.addEventListener('click', onStart);
refs.buttonStop.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let timerId = null;

function onChangeBackColor() {
  const startChangeColor = getRandomHexColor();
   refs.bodyBC.style.backgroundColor = startChangeColor;
}
function onStart() {
   
  timerId = setInterval(() => {
   onChangeBackColor()
  }, 1000);
  refs.buttonStart.setAttribute("disabled", true);
  
};

function onStop() { 
  clearInterval(timerId); 
  
  refs.buttonStart.removeAttribute("disabled", false);

};

