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

const attractionsContainer = document.querySelector(".attractions");

if (attractionsContainer) {
    console.log('достопримечательности существуют');
    const dataTitleattractoins = [
        "Волжский р-н",
        "г. Йошкар-Ола",
        "Горномарийский р-н",
        "г. Йошкар-Ола",
        "г. Йошкар-Ола",
        "пгт. Юрино",
    ];

    const titleattractions =
            attractionsContainer.querySelectorAll(".attractions__data");

            titleattractions.forEach((item, index) => {
                item.textContent = dataTitleattractions[index];
            });
     } 
