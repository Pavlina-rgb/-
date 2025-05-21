'use strict'
let currentIndex = 0;
const slider = document.querySelectorAll(".attractions__item");
const prevButton = document.querySelector(".attractions__left");
const nextButton = document.querySelector(".attractions__right");
const visibleCards = 3;
updateSlider();
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.length - visibleCards;
    }
    updateSlider();
});
nextButton.addEventListener("click", () => {
    if (currentIndex < slider.length - visibleCards) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    updateSlider();
});
function updateSlider() {
    slider.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

const EraContainer = document.querySelector(".attractions");

if (EraContainer) {
    console.log('достопримечательности существуют');
    const dataTitleEra = [
        "Волжский р-н",
        "г. Йошкар-Ола",
        "Горномарийский р-н",
        "г. Йошкар-Ола",
        "г. Йошкар-Ола",
        "пгт. Юрино",
    ];

    const titleEra =
            EraContainer.querySelectorAll(".attractions__data");

            titleEra.forEach((item, index) => {
                item.textContent = dataTitleEra[index];
            });
     } 
