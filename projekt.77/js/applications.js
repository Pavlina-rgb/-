const modal = document.getElementById('modalWindow');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

// Открытие модального окна
openBtn.addEventListener('click', () => {
  modal.hidden = false; // показываем окно
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
  modal.hidden = true; // скрываем окно
});

// Также можно закрывать окно при клике вне формы
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.hidden = true;
  }
});