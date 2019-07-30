$('.navigation').slick({
    mobileFirst: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    variableWidth: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1200,
          settings: "unslick"
        }
    ]
    });


