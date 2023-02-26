// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');

//     const toggleMenu = () => {
//         const isMenuOpen =
//           openMenuBtn.getAttribute('aria-expended') === 'true' || false;
//         openMenuBtn.setAttribute('aria-expended', !isMenuOpen);
//         mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = ! isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
// };

// openMenuBtn.addEventListener('click', toggleMenu);
// closeMenuBtn.addEventListener('click', toggleMenu);

// window.matchMedia('(min-width:768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
// });
// })();

document.addEventListener('DOMContentLoaded', function() {
  // const btnMenu = document.getElementById('btnMenu');
  // btnMenu.onclick = function() {
  //   const headerTop = document.getElementById('headerTop');
  //   headerTop.add
  // }



   $('#btnMenu').click(() => {
     $('#headerTop').slideToggle();
   })
 });

