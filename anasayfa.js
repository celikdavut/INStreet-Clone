var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});



document.getElementById('searchInput1').addEventListener('click', function () {
  document.getElementById('searchButton1').style.backgroundColor = "#ff6600";
});

