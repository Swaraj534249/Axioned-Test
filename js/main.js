const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
  links.classList.toggle('show-links');
});


const menu = [
  {
    id: 1,
    img: '../css/img/portfolio/01.jpg',
    title: "pic-1",
    category: "branding",
  },
  {
    id: 2,
    img: '../css/img/portfolio/02.jpg',
    title: "pic-2",
    category: "mobile-app",
  },
  {
    id: 3,
    img: '../css/img/portfolio/03.jpg',
    title: "pic-3",
    category: "branding",
  },
  {
    id: 4,
    img: '../css/img/portfolio/04.jpg',
    title: "pic-4",
    category: "web-design",
  },
  {
    id: 5,
    img: '../css/img/portfolio/05.jpg',
    title: "pic-5",
    category: "web-design",
  },
  {
    id: 6,
    img: '../css/img/portfolio/06.jpg',
    title: "pic-6",
    category: "mobile-app",
  },
  {
    id: 7,
    img: '../css/img/portfolio/07.jpg',
    title: "pic-7",
    category: "photography",
  },
  {
    id: 8,
    img: '../css/img/portfolio/08.jpg',
    title: "pic-8",
    category: "web-design",
  },

];

$(window).on('load', function (){
  $('.loader').fadeOut(1000);
  $('.content').fadeIn(1000);
  
});


$(document).ready(function (){

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      700: {
        items: 2,
        nav: false,
      },
      900:{
          items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
  });
  $('.carousel-2').owlCarousel({
    margin: 10,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      550: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  });
  $('.carousel-3').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

});
const sectionCenter = document.querySelector('.section-center');
  const btnContainer = document.querySelector('.btn-container');
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  });

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
});

  function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<div class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo">
        </div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;

};






