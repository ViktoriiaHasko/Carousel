/* конфигурация */
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

listElems.forEach(element => {
  element.style.width = (carousel.offsetWidth / 3) - 30 + 'px';
});

let width = carousel.querySelector('li').offsetWidth + 30;
let position = 0; // положение ленты прокрутки

carousel.querySelector('.next').onclick = () => {
  // сдвиг вправо
  position -= width;
  // Повертаємось на початок, якщо останній елемент
  (position === - width * (listElems.length - 2)) && (position = 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.prev').onclick = () => {
  // сдвиг влево
  position += width;
  // Не дозволяє зсувати далі за перший елемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};