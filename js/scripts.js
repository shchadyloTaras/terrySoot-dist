function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


$(document).ready(function () {

  console.log(getCookie("cookie"));

  if (getCookie("cookie") == "true") {
    $(".cookie").remove();
  }

  //COOKIES-BUTTON
  $(".button-close").click(function () {
    $(".cookie").addClass("close");
    document.cookie = "cookie=true";
  });

//HEADER


    $(".dropdown-toggle").click(function(){
      $(".dropdown-menu").toggleClass("open");
    });

    $('.dropdown-menu').click(function(event){
      event.stopPropagation();
    });

    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is(".dropdown-toggle") && !$(target).parents().is(".dropdown-toggle")) {
        $(".dropdown-menu").removeClass("open");
      }
    });


  //HEADER


  //INFORM



  $(".accordion").click(function () {
    $(".toggle-down").toggleClass("open");
  });

  $(".accordion-1").click(function () {
    $(".toggle-down-1").toggleClass("open-1");
  });

  $(".accordion-2").click(function () {
    $(".toggle-down-2").toggleClass("open-2");
  });

  $(".accordion-3").click(function () {
    $(".toggle-down-3").toggleClass("open-3");
  });


  $('.accordion-group').each(function () {
    var group = $(this);
    $(group).children('.accordion').each(function () {
      var accordion = $(this);
      var toggle = $(accordion).children('.accordion-toggle');
      $(toggle).on('click', function () {
        if ($(accordion).hasClass('open')) {
          $(accordion).removeClass('open').children('.panel').slideUp('fast');
        }
        else {
          $(accordion).siblings('.open').removeClass('open').children('.panel').slideUp('fast');
          $(accordion).addClass('open').children('.panel').slideDown('fast');
        }
        return false
      });
    });
  });


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }

  var accOne = document.getElementsByClassName("accordion-1");
  var c;

  for (c = 0; c < accOne.length; c++) {
    accOne[c].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }


  var accTwo = document.getElementsByClassName("accordion-2");
  var d;

  for (d = 0; d < accTwo.length; d++) {
    accTwo[d].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }

  var accThree = document.getElementsByClassName("accordion-3");
  var b;

  for (b = 0; b < accThree.length; b++) {
    accThree[b].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }




});

//change-color-inform
$(document).ready(function () {
  $(".accordion").click(function () {
    $(".accordion-color").toggleClass("changeColor");
  });

  $(".accordion-1").click(function () {
    $(".accordion-color-1").toggleClass("changeColor");
  });

  $(".accordion-2").click(function () {
    $(".accordion-color-2").toggleClass("changeColor");
  });

  $(".accordion-3").click(function () {
    $(".accordion-color-3").toggleClass("changeColor");
  });
});

$(document).ready(function () {
  $(".accordion").click(function () {
    $(".arrow-change-color").toggleClass("changeColor");
  });

  $(".accordion-1").click(function () {
    $(".arrow-change-color-1").toggleClass("changeColor");
  });

  $(".accordion-2").click(function () {
    $(".arrow-change-color-2").toggleClass("changeColor");
  });

  $(".accordion-3").click(function () {
    $(".arrow-change-color-3").toggleClass("changeColor");
  });
});
//change-color-inform


//smoothscroll
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}

$(document).ready(function () {
  $(document).on("scroll", onScroll);


  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 30
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

});


$(document).ready(function() {

});








