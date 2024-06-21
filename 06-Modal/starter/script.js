'use strict';

const modal = document.querySelector('.modal'); // Select the modal
const overlay = document.querySelector('.overlay'); // Select the overlay
const btnCloseModal = document.querySelector('.close-modal'); // Select the close button
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  // Add the hidden class to the modal and overlay
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  // Remove the hidden class from the modal and overlay
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// addEventListener
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  // If the key pressed is the escape key and the modal does not have the hidden class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
