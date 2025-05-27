'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Скрипт отработал корректно');
    
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.querySelector(".popup");

    if (openBtn && closeBtn && modal) {
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
            if (e.key === 'Escape' && modal.style.display === "block") {
                modal.style.display = "none";
                document.body.style.overflow = '';
            }
        });
    }
});