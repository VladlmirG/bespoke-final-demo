//Start of query to make navbar stick while scrolling
window.onscroll = () =>{

    //Make search button interactive
    header1 = document.querySelector('.header-1');

    //remove active searchbar when scrolling
    header1.classList.remove('active');
    //

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}



//Start of query to restore navbar to its default position on reloading page
window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }


//loading page animation connected to window.onload()
fadeOut();
}


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





//LOADER PAGE ANIMATION SNIP
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 1000);
}


//SWIPER SLIDER SNIP FOR FEATURED SECTION
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        Delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });




// //SWIPER SLIDER SNIP FOR REVIEWS SECTION
// var swiper = new Swiper(".reviews-slider", {
//   spaceBetween: 10,
//   grabCursor: true,
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//       Delay: 9500,
//       disableOnInteraction: false,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });


//SWIPER SLIDER SNIP FOR BLOGS SECTION
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
      Delay: 9500,
      disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


