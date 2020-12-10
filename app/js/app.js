document.addEventListener('DOMContentLoaded', function () {
  SmoothScroll({ stepSize: 60 });

  $('.supermenu__item').hover(
    function () {
      clearTimeout($.data(this, 'timer'));
      $($(this).find('.supermenu__submenu-wrapper'), this).stop(true, true).slideDown(200);
    },
    function () {
      $.data(
        this,
        'timer',
        setTimeout(
          $.proxy(function () {
            $($(this).find('.supermenu__submenu-wrapper'), this).stop(true, true).slideUp(200);
          }, this),
          100,
        ),
      );
    },
  );

  $('.header-search').hover(
    function () {
      clearTimeout($.data(this, 'timer'));
      $($(this).find('.header-search__wrapper'), this).stop(true, true).slideDown(200);
    },
    function () {
      $.data(
        this,
        'timer',
        setTimeout(
          $.proxy(function () {
            $($(this).find('.header-search__wrapper'), this).stop(true, true).slideUp(200);
          }, this),
          100,
        ),
      );
    },
  );

  $('.product-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow:
      '<button class="slick-btn product-slider__slider-btn product-slider__slider-btnprev" ></button>',
    nextArrow:
      '<button class="slick-btn product-slider__slider-btn product-slider__slider-btnnext" ></button>',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  if ($('.section-2').length) {
    const offsetTop = $('.section-2').offset().top;
    const innerHeight = window.innerHeight;

    $(window).on('scroll', function () {
      //, window, { passive: true }
      let scrollTop = $(this).scrollTop();
      $('.section-1').css('background-position', '50% ' + Math.floor(scrollTop / 6) + 'px');
      $('.section-2').css(
        'background-position',
        '50% ' + Math.floor(-(offsetTop - scrollTop - innerHeight) / 6 - 100) + 'px',
      );
    });
  }

  $('.category__filter-button').on('click', function () {
    $(this).addClass('category__filter-button--active');
    $(this).siblings().removeClass('category__filter-button--active');
  });

  $('.products-list__button-grid').on('click', chengeActiveButton);
  $('.products-list__button-line').on('click', chengeActiveButton);
  function chengeActiveButton() {
    const availabilityActive = $(this).is('.products-list__button--active');
    if (!availabilityActive) {
      $(this).addClass('products-list__button--active');
      $(this).siblings().removeClass('products-list__button--active');
      $('.products-list__items').toggleClass('products-list__items--line');
    }
  }

  $('.pagination__list-item').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  $(document).on('click', '.input-number__minus', function () {
    let total = $(this).next();
    if (total.val() > 1) {
      total.val(+total.val() - 1);
    }
  });
  // Увеличиваем на 1
  $(document).on('click', '.input-number__plus', function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);
  });
  // Запрещаем ввод текста
  document.querySelectorAll('.input-number__input').forEach(function (el) {
    el.addEventListener('input', function () {
      this.value = this.value.replace(/[^\d]/g, '');
    });
  });

  /* slick */
  $('.big-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.thumbnales-img',
  });
  $('.thumbnales-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.big-img',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:
      '<button class="slick-btn product-slider__slider-btn product-slider__slider-btnprev" ></button>',
    nextArrow:
      '<button class="slick-btn product-slider__slider-btn product-slider__slider-btnnext" ></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  });

  // mob menu
  $('.mobile-menu__button').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  $('.mobile-menu__box i').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('a').next().slideToggle();
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    let elem = $('.mobile-menu__box');
    let button = $('.mobile-menu__button');
    if (
      !elem.is(e.target) && //закрываем блок если было нажато на пустом поле, ф не на блоке или дочернем эллементе
      elem.has(e.target).length === 0 &&
      !button.is(e.target) &&
      button.has(e.target).length === 0
    ) {
      $('.mobile-menu__button').removeClass('active');
      $('.mobile-menu__button').next().slideUp();
    }
  });

  $(document).on('scroll', function () {
    if ($(this).outerWidth(true) > 992) {
      if ($(this).scrollTop() > 20) {
        $('.header').addClass('sticky-top');
      } else {
        $('.header').removeClass('sticky-top');
      }
    } else {
      $('.header').removeClass('sticky-top');
    }
  });

  /* block animation */
  /* 1.-класс цели. 2.-классы анмации['fadeInLeft','fadeInRight'] */
  scrollAnimate({
    targetClass: '.categoris-item, .news-box',
    animatClass: ['fadeInLeft', 'fadeInRight'],
  });
  scrollAnimate({
    targetClass: '.products-cart, .footer, .otherproduct__item',
    animatClass: ['fadeInUp', 'fadeInUp'],
  });
});
