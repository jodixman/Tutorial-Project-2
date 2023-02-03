let menuBtn = document.querySelector('#menu-btn'); //Ini memasuki document menu-btn ke file
let navbar = document.querySelector('.header .flex .navbar'); // ini sama juga masukin document ke file

menuBtn.onclick = () =>{  //jika menuBtn di klik maka function bekerja sebagai 
    menuBtn.classList.toggle('fa-times'); // toggle ini utuk menambahkan class  (bisa juga kaya matiin lampu dan nyalakan lampu)
    navbar.classList.toggle('active');
}

//Buat Slide Swipe

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
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

//Buat Slide Swipe Teacher
  var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
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

  //Review

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
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