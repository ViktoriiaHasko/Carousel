(function () {
  // Config
  let carousel = document.querySelector('#carousel');
  let list = carousel.querySelector('ul');
  let listElems = carousel.querySelectorAll('li');
  let position = 0; // set initial position
  let width = 0;
  const elementMarginX = 30;

  const setCarouselElementWidth = () => {
    const elementWidth = document.body.clientWidth <= 768
    ? carousel.offsetWidth
    : carousel.offsetWidth / 3;

    listElems.forEach(element => {
      element.style.width = elementWidth - elementMarginX + 'px';
    });
  }

  const getCarouselElementWidth = () => carousel.querySelector('li').offsetWidth + elementMarginX;

  const moveToNextElement = () => {
    position -= width;
    // Return to the beginning, if this is the last element
    (position === - width * (listElems.length - 2)) && (position = 0)
    list.style.marginLeft = position + 'px';
  }

  const moveToPrevElement = () => {
    position += width;
    // Do not allow to move behind the first element
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  }

  window.addEventListener('load', () => {
    setCarouselElementWidth();

    width = getCarouselElementWidth();
  })

  window.addEventListener('resize', () => {
    setCarouselElementWidth();

    width = getCarouselElementWidth();
  })

  carousel.querySelector('.next').addEventListener('click', moveToNextElement);
  carousel.querySelector('.prev').addEventListener('click', moveToPrevElement);

}());