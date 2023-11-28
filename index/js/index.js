(function () {
    // 슬라이더 
    let swiper = new Swiper(".mainSlider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
    });

})()