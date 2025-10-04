// class Accordion {
//   constructor() {
//     this.initAccordion();
//   }

//   initAccordion() {
//     const accordionHeaders = document.querySelectorAll('[data-toggle="accordion"]');

//     accordionHeaders.forEach(header => {
//       header.addEventListener('click', (e) => {
//         e.preventDefault();

//         const content = header.nextElementSibling;
//         const icon = header.querySelector('.accordion-icon');

//         // Toggle current accordion
//         const isActive = content.classList.contains('active');

//         if (isActive) {
//           content.classList.remove('active');
//           header.classList.remove('active');
//           icon.textContent = '+';
//         } else {
//           content.classList.add('active');
//           header.classList.add('active');
//           icon.textContent = '−';
//         }
//       });
//     });
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   new Accordion();
// });
