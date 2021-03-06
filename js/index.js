debounce = function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function perc(numero, perc) {
  return numero * perc / 100
}

function carousel() {
  var $simpleCarousel = document.querySelector(".js-carousel--simple");
  var carousel = document.querySelectorAll(".c-carousel__slides").length;

  if (carousel > 0) {
    new Glider($simpleCarousel, {
      slidesToShow: 1,
      draggable: true,
      dots: ".js-carousel--simple-dots",
      arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
      },
    });
  }
}

function boxTop(idBox) {
  return $(idBox).offset().top;
}

function animarMenu() {
  $(document).scroll(function () {
    var height = $(document).scrollTop()
    if (height > 100) {
      $('.navbar').css("background", "rgba(0, 0, 0, 0.9)")
      $('.navbar').css("padding", ".8em 0 .8em 0")
    } else {
      $('.navbar').css("background", "transparent")
      $('.navbar').css("padding", "2em 0 2em 0")
    }

  });
}

function carrosselAutomatico() {

  $('.carousel').hover(function () {
    var count = 0
    $(".btn-carousel").each(function () {
      if (count == 0) {
        $(this).removeClass('js-carousel--simple-prev')
        count++
      } else {
        $(this).removeClass('js-carousel--simple-next')
      }
      count++
    })
  }, function () {
    var count = 0
    $(".btn-carousel").each(function () {
      if (count == 0) {
        $(this).addClass('js-carousel--simple-prev')
        count++
      } else {
        $(this).addClass('js-carousel--simple-next')
      }
      count++
    })

  })

  var depoimentos = document.querySelectorAll('.c-carousel__slide').length - 1
  var clicks = 0
  setInterval(function () {
    if (clicks == depoimentos) {
      $('.js-carousel--simple-prev').click()
      clicks = 0
    } else {
      $('.js-carousel--simple-next').click()
      clicks++
    }
  }, 5000)
}

function scrollToTop() {
  $(document).scroll(function () {
    var height = $(document).scrollTop()
    if (height > 100) {
      $('#back-top').css("display", "block")
      $('#back-top').css("opacity", "100")
    } else {
      $('#back-top').css("opacity", "0")
      $('#back-top').css("display", "none")
    }
  });

  $("#back-top").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#home").offset().top
    }, 500);
  });
}

function medidas(elemento) {
  var scroll = $(document).scrollTop() / 2.5 * 4
  var height = document.getElementById(elemento).clientHeight
  var position = $("#" + elemento).offset().top
  var range = $("#" + elemento).offset().top + height
  return {
    scroll, height, position, range
  }
}

function sendEmail() {
  var nome = $('#nome-input')
  var email = $('#email-input')
  var telefone = $('#telefone-input')
  var servico = $('#servico-input')
  var mensagem = $('#mensagem-input')
  var button = $('#button-form')
  var notes = { nome: nome.val(), email: email.val(), telefone: telefone.val(), servico: servico.val(), mensagem: mensagem.val() }

  var templateParams = notes

  emailjs.send('contato_tech', 'template_6nd8vop', templateParams)
    .then(function () {
      nome.val("")
      email.val("")
      telefone.val("")
      mensagem.val("")
    }, function (error) {
      alert('Algum erro ocorreu!')
    });

}

$('#button-form').click(() => {
  sendEmail()
})

function loadPage() {
  AOS.init()
  carousel();
  animarMenu()
  carrosselAutomatico()
  scrollToTop()
}