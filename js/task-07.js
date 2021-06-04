//  Task 7

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при
// перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

 
const inputLength = validationInput.dataset.size;
const stylefontSize = document.querySelector('#stylefontSize');

validationInput.addEventListener('change', controlOfValidation);

function controlOfValidation(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === stylefontSize.) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid'); }
    else
    {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
    }