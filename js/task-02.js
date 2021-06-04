const ingredients = ['Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы'].map(number => {
        const li = document.createElement('li');
        li.textContent = number;
        return li;
    });
console.log(ingredients);
document.body.append(...ingredients);
 