'use strict'

document.addEventListener("DOMContentLoaded", () => {
console.log('Скрипт отработал корректно')
});

//Алгоритм
//1.Начало
//2.Получаем все элементы кнопок для слайдера (влево-вправо)
//3.Проверяем существуют ли кнопки:
    //3.1 Добавляем обработчик нажатия курсора на кнопку:
      //3.1.1 Да:
       //3.1.1.1 Листаем влево/вправо при наведении, с перемещением на следующий элемент
    //3.1.2 Нет: продолжаем
//4. Конец

document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.querySelector(".popup");

    openBtn.addEventListener('click', function () {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !(modal.style.display = "none")) {
            modal.style.display = "none";
            document.body.style.overflow = '';
        }
    });
});
