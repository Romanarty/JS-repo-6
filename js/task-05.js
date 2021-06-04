// Task-5
const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    checkbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};
refs.input.addEventListener('focus', onInputFocus);
function onInputFocus() { console.log('Инпут получил фокус') };
refs.input.addEventListener('input', onInputChange);
function onInputChange(span ) {
    if (input===span ) {console.log('CurrentTarget.value') }; 
    else (input === null) { console.log('незнакомец') };
};
