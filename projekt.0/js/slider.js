'use strict';

// Задание 3.5
// const attractionsData = [
//     { 
//       title: "Национальный парк Марий Чодра",
//       name: "Волжский р-н",
//       image: "./images/chodra1.jpg", 
//       description: "Национальный парк «Марий Чодра» — один из красивейших уголков нашего государства, жемчужина Марийского края.",
//       link: "#"
//     },
//     { 
//       title: "Дом Пчелина",
//       name: "г. Йошкар-Ола", 
//       image: "./images/pchelina1.jpg", 
//       description: "Здание было построено в XVIII в. Историки считают, что это самое древнее каменное здание города.",
//       link: "#"
//     },
//     { 
//       title: "Кедровая роща",
//       name: "Горномарийский р-н", 
//       image: "./images/kedrovaya1.jpg", 
//       description: "Памятник природы «Кедровая роща 1910 года» находится в Горномарийском районе Марий Эл.",
//       link: "#"
//     },
//     { 
//       title: "Вознесенский собор",
//       name: "г. Йошкар-Ола", 
//       image: "./images/voznesenskiy1.jpg", 
//       description: "Вознесенская церковь в Царевококшайске была построена в 1756 году.",
//       link: "#"
//     },
//     { 
//       title: "Ботанический сад",
//       name: "г. Йошкар-Ола", 
//       image: "./images/botanicheskiy1.jpg", 
//       description: "Ботанический сад-институт расположен на территории г. Йошкар-Олы.",
//       link: "#"
//     },
//     { 
//       title: "Замок Шереметева",
//       name: "пгт. Юрино", 
//       image: "./images/zamok.jpg", 
//       description: "Расположен на берегу Волги, в поселке Юрино Республики Марий Эл.",
//       link: "#"
//     }
//   ];

// let currentIndex = 0;
// const slider = document.querySelectorAll(".attractions__item");
// const prevButton = document.querySelector(".attractions__left");
// const nextButton = document.querySelector(".attractions__right");
// const visibleCards = 3;

// function createSliderItems() {
//   const sliderList = document.querySelector('.attractions__list');
//   sliderList.innerHTML = ''; 

//   attractionsData.forEach((item, index) => {
//     const sliderItem = document.createElement('li');
//     sliderItem.className = 'attractions__item';
    
//     sliderItem.innerHTML = `
//       <a class="attractions__link" href="${item.link}" target="_blank">
//         <img class="attractions__img" src="${item.image}" width="700" height="500" alt="${item.title}">
//         <h3 class="attractions__data">${item.title}</h3>
//       </a>
//       <p class="attractions__name">${item.description}</p>
//     `;
    
//     sliderList.appendChild(sliderItem);
//   });
// }

// function initSlider() {
//   createSliderItems();
  
//   let currentIndex = 0;
//   const slider = document.querySelectorAll(".attractions__item");
//   const prevButton = document.querySelector(".attractions__left");
//   const nextButton = document.querySelector(".attractions__right");
//   const visibleCards = 3;

//   function updateSlider() {
//     slider.forEach((item, index) => {
//       if (index >= currentIndex && index < currentIndex + visibleCards) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   }

//   prevButton.addEventListener("click", function() {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = slider.length - visibleCards;
//     }
//     updateSlider();
//   });

//   nextButton.addEventListener("click", function() {
//     if (currentIndex < slider.length - visibleCards) {
//       currentIndex++;
//     } else {
//       currentIndex = 0;
//     }
//     updateSlider();
//   });

//   updateSlider();
// }

// document.addEventListener('DOMContentLoaded', initSlider);


// Задание 3.6
// document.addEventListener('DOMContentLoaded', () => {
//     const preloader = document.querySelector('.preloader');
//     const content = document.querySelector('.content');
    
//     if (preloader && content) {
//         preloader.style.opacity = '1';
//         preloader.style.visibility = 'visible';
//         content.style.display = 'none';
//     }

//     const minLoaderTime = 3000;
//     const loaderStartTime = Date.now();

//     const hidePreloader = () => {
//         const elapsedTime = Date.now() - loaderStartTime;
//         const remainingTime = Math.max(0, minLoaderTime - elapsedTime);

//         setTimeout(() => {
//             if (preloader && content) {
//                 preloader.style.opacity = '0';
//                 preloader.style.visibility = 'hidden';
//                 content.style.display = 'block';
//                 setTimeout(() => {
//                     preloader.remove();
//                 }, 300);
//             }
//         }, remainingTime);
//     };

//     const scrollToogleClass = (elem, heightElem, classElem) => {
//         document.addEventListener('scroll', () => {
//             let scrollPageY = window.scrollY;
            
//             if (scrollPageY > heightElem) {
//                 elem.classList.add(classElem);
//             } else {
//                 elem.classList.remove(classElem);
//             }
//         });
//     };

//     const initSlider = (attractionsData) => {
//         const createSliderItems = () => {
//             const sliderList = document.querySelector('.attractions__list');
//             sliderList.innerHTML = ''; 

//             attractionsData.forEach((item) => {
//                 const sliderItem = document.createElement('li');
//                 sliderItem.className = 'attractions__item';
                
//                 sliderItem.innerHTML = `
//                     <a class="attractions__link" href="${item.link}" target="_blank">
//                         <img class="attractions__img" src="${item.image}" width="700" height="500" alt="${item.title}">
//                         <h3 class="attractions__data">${item.title}</h3>
//                     </a>
//                     <p class="attractions__name">${item.description}</p>
//                 `;
                
//                 sliderList.appendChild(sliderItem);
//             });
//         };

//         createSliderItems();
        
//         let currentIndex = 0;
//         const slider = document.querySelectorAll(".attractions__item");
//         const prevButton = document.querySelector(".attractions__left");
//         const nextButton = document.querySelector(".attractions__right");
//         const visibleCards = 3;

//         const updateSlider = () => {
//             slider.forEach((item, index) => {
//                 if (index >= currentIndex && index < currentIndex + visibleCards) {
//                     item.style.display = "block";
//                 } else {
//                     item.style.display = "none";
//                 }
//             });
//         };

//         if (prevButton) {
//             prevButton.addEventListener("click", function() {
//                 if (currentIndex > 0) {
//                     currentIndex--;
//                 } else {
//                     currentIndex = slider.length - visibleCards;
//                 }
//                 updateSlider();
//             });
//         }

//         if (nextButton) {
//             nextButton.addEventListener("click", function() {
//                 if (currentIndex < slider.length - visibleCards) {
//                     currentIndex++;
//                 } else {
//                     currentIndex = 0;
//                 }
//                 updateSlider();
//             });
//         }
//         updateSlider();
//     };

//     const dataPromise = fetch('data.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             initSlider(data);
//             hidePreloader(); 
//         })
//         .catch(error => {
//             console.error('Error loading data:', error);
//             hidePreloader();
//         });

// });


document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    
    if (preloader && content) {
        preloader.style.opacity = '1';
        preloader.style.visibility = 'visible';
        content.style.display = 'none';
    }

    const minLoaderTime = 3000;
    const loaderStartTime = Date.now();

    const hidePreloader = () => {
        const elapsedTime = Date.now() - loaderStartTime;
        const remainingTime = Math.max(0, minLoaderTime - elapsedTime);

        setTimeout(() => {
            if (preloader && content) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                content.style.display = 'block';
                setTimeout(() => {
                    preloader.remove();
                }, 300);
            }
        }, remainingTime);
    };

    const scrollToogleClass = (elem, heightElem, classElem) => {
        document.addEventListener('scroll', () => {
            let scrollPageY = window.scrollY;
            
            if (scrollPageY > heightElem) {
                elem.classList.add(classElem);
            } else {
                elem.classList.remove(classElem);
            }
        });
    };

    const initSlider = (attractionsData) => {
        const sliderContainer = document.querySelector('.attractions__list');
        sliderContainer.innerHTML = '';

        attractionsData.forEach((item) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide attractions__item';
            
            slide.innerHTML = `
                <a class="attractions__link" href="${item.link}" target="_blank">
                    <img class="attractions__img" src="${item.image}" width="700" height="500" alt="${item.title}">
                    <h3 class="attractions__data">${item.title}</h3>
                </a>
                <p class="attractions__name">${item.description}</p>
            `;
            
            sliderContainer.appendChild(slide);
        });

        const swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            loop: true,

            pagination: {
                el: '.swiper-pagination',
            },
        });
    };        

    const dataPromise = fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            initSlider(data);
            hidePreloader(); 
        })
        .catch(error => {
            console.error('Error loading data:', error);
            hidePreloader();
        });


        const slider = document.querySelector('.swiper');

});