// Scroll to top functionality
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollToTop()};
function scrollToTop() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.height = "38px";
    mybutton.style.bottom = "0px";
  } else {
    mybutton.style.height = "0px";
    mybutton.style.bottom = "-15px";
  }
}
// Scroll to top button click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Cover display hide functionality
hideCoverAfter(4400);
function hideCoverAfter(milliSeconds) {
  document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.body.style.overflow = "auto";
    }, milliSeconds - 1000);
    setTimeout(() => {
        document.getElementById('cover').style.display = "none";
    }, milliSeconds);
}

// Header
function toggleHeader() {
  var menuCover = document.getElementById("menu-cover");
  if (menuCover.classList.contains("has-offcanvas")) {
    menuCover.classList.remove("has-offcanvas");
  }
  else {
    menuCover.classList.add("has-offcanvas");
  }
}

// Appreciation comments
var swiper = new Swiper(".mySwiper", {
  speed: 1500,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  }
});
setTimeout(() => {
  swiper.autoplay.start();
}, 5000);

// Animation on scroll
AOS.init();

//Experiments
function showModal() {
  var modalOverlay = document.getElementsByClassName("custom-modal-overlay")[0];
  var modal = document.getElementsByClassName("custom-modal")[0];
  modalOverlay.classList.add("active");
  modal.classList.add("active");
}

function closeModal() {
  var modalOverlay = document.getElementsByClassName("custom-modal-overlay")[0];
  var modal = document.getElementsByClassName("custom-modal")[0];
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
}