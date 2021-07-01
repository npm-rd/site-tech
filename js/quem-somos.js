function fixToScroll() {
    $(document).scroll(function () {
      var scroll = $(document).scrollTop() / 2.5 * 4
      var height = document.getElementById("quem-somos").clientHeight
      var position = $("#quem-somos").offset().top
      var range = $("#quem-somos").offset().top + height
      if(scroll > position + perc(position, 80) && scroll < range - perc(range, 30)) {
        $('#sobre-nos').addClass('fixar')
        $('#sobre-nos').removeClass("fix-bottom")
      } else if (scroll < position) {
        $('#sobre-nos').removeClass("fixar")
        $('#sobre-nos').removeClass("fix-bottom")
      } else if (scroll > range - perc(range, 20)) {
        $('#sobre-nos').removeClass("fixar")
        $('#sobre-nos').addClass("fix-bottom")
      }
    });
}

// fixToScroll()