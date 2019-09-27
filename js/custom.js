$(document).ready(function () {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('#main_nav #logo').css({ "height": "50px", "width": "61px" })
            $('#main_nav.navbar').removeClass('bg-light navbar-light')
            $('#main_nav.navbar').addClass('bg-dark navbar-dark')
           
        }
        if (scroll < 50) {
            $('#main_nav #logo').css({ "height": "80px", "width": "98px" })
            $('#main_nav.navbar').removeClass('bg-dark navbar-dark')
            $('#main_nav.navbar').addClass('bg-light navbar-light')
         
        }
    })
    $('.carousel').carousel({
        interval: 3000,
        pause: 'hover'
    });

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '3aAAZ00');
    });

      //lightbox trigger
      $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


});