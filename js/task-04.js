// Task-4
var counterValue = 0;
function increment(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}
console.log(counterValue);
 
const targetBtn = document.querySelector('js-target-btn');
const addListenerBtn = document.querySelector('js-add-listener');
const updatePage = document.querySelector('js-update-page');

targetBtn.addEventListener('click', () => { console.log('Клик') });
addListenerBtn.HandleTargetButtonClick('click', () => { console.log('Вызови функцию') });
updatePage.logMessage ('click', () => { console.log('Обнови интерфейс') });