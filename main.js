document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });
 /**
 * Scroll top button
 */
 const scrollTop = document.querySelector('.scroll-top');
 if (scrollTop) {
   const togglescrollTop = function() {
     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
   }
   window.addEventListener('load', togglescrollTop);
   document.addEventListener('scroll', togglescrollTop);
   scrollTop.addEventListener('click', window.scrollTo({
     top: 0,
     behavior: 'smooth'
   }));
 }

 /**
  * Initiate glightbox
  */
 const glightbox = GLightbox({
   selector: '.glightbox'
 });

/**
 * Initiate pURE cOUNTER
 */
new PureCounter();
  
  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});
 /**
 sizing for carasel wording inside and the hiring square
 */

// Constants for font sizing
const carouselMinFontSize = 16;
const carouselMaxFontSize = 42;
const carouselMinScreenWidth = 320;
const carouselMaxScreenWidth = 1200;

const bottomAreaMinFontSize = 16;
const bottomAreaMaxFontSize = 42;
const bottomAreaMinScreenWidth = 320;
const bottomAreaMaxScreenWidth = 1200;

const hiringSquareMinFontSize = 16;
const hiringSquareMaxFontSize = 42;
const hiringSquareMinScreenWidth = 320;
const hiringSquareMaxScreenWidth = 1200;

function setCarouselFontSize() {
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const fontSize = Math.max(
  carouselMinFontSize,
  Math.min(
    carouselMaxFontSize,
    Math.floor(
      ((screenWidth + screenHeight) / 2 - carouselMinScreenWidth) /
        (carouselMaxScreenWidth - carouselMinScreenWidth) *
        (carouselMaxFontSize - carouselMinFontSize) +
        carouselMinFontSize
    )
  )
);
const heading = document.querySelector('h2');
const paragraph = document.querySelector('p');
heading.style.fontSize = `${fontSize}px`;
paragraph.style.fontSize = `${fontSize / 2}px`;
}

function setBottomAreaFontSize() {
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const fontSize = Math.max(
  bottomAreaMinFontSize,
  Math.min(
    bottomAreaMaxFontSize,
    Math.floor(
      ((screenWidth + screenHeight) / 2 - bottomAreaMinScreenWidth) /
        (bottomAreaMaxScreenWidth - bottomAreaMinScreenWidth) *
        (bottomAreaMaxFontSize - bottomAreaMinFontSize) +
        bottomAreaMinFontSize
    )
  )
);
const bottomAreas = document.querySelectorAll('.bottom-area');
bottomAreas.forEach(area => {
  area.style.fontSize = `${fontSize}px`;
  area.querySelector('span').style.fontSize = `${fontSize}px`;
  area.querySelector('p').style.fontSize = `${fontSize / 2}px`;
});
}

function setHiringSquareFontSize() {
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const fontSize = Math.max(
  hiringSquareMinFontSize,
  Math.min(
    hiringSquareMaxFontSize,
    Math.floor(
      ((screenWidth + screenHeight) / 2 - hiringSquareMinScreenWidth) /
        (hiringSquareMaxScreenWidth - hiringSquareMinScreenWidth) *
        (hiringSquareMaxFontSize - hiringSquareMinFontSize) +
        hiringSquareMinFontSize
    )
  )
);
const hiringSquare = document.querySelector('#hiring-square');
hiringSquare.style.fontSize = `${fontSize / 1.5}px`;
}

setCarouselFontSize();
setBottomAreaFontSize();
setHiringSquareFontSize();
window.addEventListener('resize', setCarouselFontSize);
window.addEventListener('resize', setBottomAreaFontSize);
window.addEventListener('resize', setHiringSquareFontSize);

/**
 format the service request phone number
 */
 const phoneInput = document.getElementById('service-phone');
 phoneInput.addEventListener('input', () => {
   const phoneNumber = phoneInput.value;
   phoneInput.value = formatPhoneNumber(phoneNumber);
 });

 function formatPhoneNumber(phoneNumber) {
   const cleaned = ('' + phoneNumber).replace(/\D/g, '');
   const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
   if (match) {
     const firstGroup = match[1] ? '(' + match[1] + ') ' : '';
     const secondGroup = match[2] ? match[2] + '-' : '';
     return firstGroup + secondGroup + match[3];
   }
   return cleaned;
 }
 