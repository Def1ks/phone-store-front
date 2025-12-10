// Функция инициализации карусели
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (!track || !slides.length || !prevBtn || !nextBtn) {
    console.log('Карусель не найдена на этой странице, пропускаем инициализацию.');
    return;
  }

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

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

// Функция инициализации бургер-меню
function initBurgerMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.backdrop');
  const body = document.body;

  if (!menuToggle || !mobileMenu) {
    console.log('Элементы бургер-меню не найдены на этой странице, пропускаем инициализацию.');
    return;
  }

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('is-active');
    mobileMenu.classList.toggle('menu-open');

    const isOpen = mobileMenu.classList.contains('menu-open');
    body.classList.toggle('no-scroll', isOpen);
    if (backdrop) {
      backdrop.classList.toggle('active', isOpen);
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', function () {
      menuToggle.classList.remove('is-active');
      mobileMenu.classList.remove('menu-open');
      body.classList.remove('no-scroll');
      backdrop.classList.remove('active');
    });
  }
}

// Функция инициализации десктопных фильтров
function initFilters() {
  const filterToggles = document.querySelectorAll('.filter-toggle');

  if (!filterToggles.length) {
    console.log('Фильтры не найдены на этой странице, пропускаем инициализацию.');
    return;
  }

  filterToggles.forEach(button => {
    button.addEventListener('click', function () {
      const targetBlock = this.nextElementSibling;
      if (!targetBlock) return;

      this.classList.toggle('active');
      targetBlock.classList.toggle('visible-filter');
    });
  });
}

// Функция инициализации мобильной кнопки открытия фильтров
function initMobileFilterToggle() {
  const openButton = document.querySelector('.mobile-filter-button');
  const mobileFilter = document.querySelector('.page-catalog .shop .mobile-filter');

  if (!openButton || !mobileFilter) {
    console.log('Кнопка или блок мобильных фильтров не найдены.');
    return;
  }

  openButton.addEventListener('click', function () {
    mobileFilter.classList.toggle('visible-filter');
  });
}

// Функция для плавного появления заголовков и блоков при скролле
function initSectionReveal() {
  const titles = document.querySelectorAll('.section-title');

  if (!titles.length) {
    console.log('Заголовки .section-title не найдены, пропускаем инициализацию анимации.');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const nextContent = entry.target.nextElementSibling;
        if (nextContent && nextContent.classList.contains('section-content')) {
          nextContent.classList.add('visible');
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' 
  });

  titles.forEach(title => observer.observe(title));
}

// Запуск всех компонентов после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM загружен, инициализируем функции...');

  initCarousel();
  initBurgerMenu();
  initFilters();
  initMobileFilterToggle();
  initSectionReveal(); 
});