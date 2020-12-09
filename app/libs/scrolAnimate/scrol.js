/* 1.-класс цели. 2.-классы анмации['fadeInLeft','fadeInRight'] */
/* scrollAnimate({
  targetClass: ".categoris-item, .news-box",
  animatClass: ["fadeInLeft", "fadeInRight"],
}); */

function scrollAnimate({ targetClass, animatClass }) {
  const targets = $(targetClass);

  $(window).on("scroll resize load", function () {
    let windowDown = $(this).scrollTop() + $(this).height();
    let idx = 0;

    $(targets).each(function () {
      const itemPosition = $(this).offset().top;
      if (itemPosition < windowDown) {
        if (!(idx % 2)) {
          $(this).addClass(animatClass[0]);
        } else {
          $(this).addClass(animatClass[1]);
        }
      } 
      idx++;
    });
  });
}