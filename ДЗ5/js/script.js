let menu = document.querySelector('.menu'),
    menuItems = menu.querySelectorAll('.menu-item'),
    newMenuItem = document.createElement('li'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    prompt_block = document.querySelector('#prompt');

// Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(menuItems[1], menuItems[3]);

newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
adv.remove();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
prompt_block.textContent = prompt('Как вы относитесь к технике Apple?');