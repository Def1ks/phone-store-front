// Функция инициализации карусели
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const indicators = document.querySelectorAll('.indicator');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  // Проверяем, существуют ли элементы карусели на странице
  if (!track || !indicators.length || !slides.length || !prevBtn || !nextBtn) {
    console.log('Карусель не найдена на этой странице, пропускаем инициализацию.');
    return; // Выходим из функции, если элементы отсутствуют
  }

  let currentIndex = 0; // Переменная внутри функции, изолирована

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });
}

// Основная функция инициализации бургер-меню
function initBurgerMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  // Проверяем, существуют ли элементы меню на странице
  if (!menuToggle || !mobileMenu) {
     console.log('Элементы бургер-меню не найдены на этой странице, пропускаем инициализацию.');
     return; // Выходим из функции, если элементы отсутствуют
  }

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('is-active');
    mobileMenu.classList.toggle('menu-open');
    body.classList.toggle('no-scroll', mobileMenu.classList.contains('menu-open'));
  });
}

// Основной код, который запускается после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM загружен, инициализируем функции...');

  initCarousel();    // Инициализируем карусель (если она есть)
  initBurgerMenu();  // Инициализируем бургер-меню (если оно есть)
});