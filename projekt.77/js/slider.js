'use strict';

// Задание 3.5
 const toursContainer = document.querySelector('.tours');
 if (toursContainer) {
     const toursList = toursContainer.querySelector('.tours__list');
     const toursData = [
    { 
          image: "images/chodra.jpg", 
          width: 200,
          hegiht: 150,
          subtitle:"Лесные озёра"
    },
    { 
        image: "images/zamok2.jpg", 
        width: 200,
        hegiht: 150,
        subtitle:"Старинный замок"
  },    
  { 
    image: "images/voznesenskiy.jpg", 
    width: 200,
    hegiht: 150,
    subtitle:"История в камне"
},
{ 
    image: "images/kedrovaya2.jpg", 
    width: 200,
    hegiht: 150,
    subtitle:"Заповедные леса"
}

 ];
     // Функция для создания карточки
     const createCard = (image, width, hegiht, subtitle ) => {
         
         const card = `
             <li class="tours__item">
                    <img src="${image}" alt="" class="tours__image" width="${width}" height="${hegiht}">
                    <h3 class="tours__subtitle">${subtitle}</h3>
                </li>
         `; 
         

         return card;
     }

     for (const cardKey in toursData) {
         const card = toursData[cardKey];

         const cardElement = createCard(card.image, card.width, card.hegiht, card.subtitle);
         toursList.insertAdjacentHTML('beforeend', cardElement); // Второй вариант
     }
 }


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