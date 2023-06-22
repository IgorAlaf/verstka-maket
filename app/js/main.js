$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside').removeClass('rightside-close');
    });
    $('.rightside__btn-close').on('click', function () {
        $('.rightside').addClass('rightside-close');
    });
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });
    $('.article-slider__slider').slick({
        prevArrow: '<button type="button" class="article-slider__prev"><img src="images/icons/back-bold.svg" alt="" class="article-slider__prev-img"></button>',
        nextArrow: '<button type="button" class="article-slider__next"><img src="images/icons/next-bold.svg" alt="" class="article-slider__next-img"></button>',
    });

    $('.mini-gallary__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
    });
    var mixer = mixitup('.gallery__example', {
        animation: {
            duration: 400,
            effects: 'fade translateZ(-100px)',
            queue: false
        },
        load: {
            filter: '.living'
        }
    })

})


