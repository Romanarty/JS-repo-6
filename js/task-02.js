const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const TitleEl = ingredients.createElement('ul');
const TitleItem = ingredients.createElement('li');
TitleEl.appendChild(TitleItem)
console.log(TitleEl);
console.log(TitleItem);

const Maketag = document.createElement('h1')
Maketag.classList.add('page-header');
Maketag.textContent = "Я сладкий пирожочек"
console.log(Maketag);

 