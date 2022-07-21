// Botão voltar ao topo
$(document).ready(function() {
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('.voltarTopo').addClass('show')
        $('.flecha').removeClass('show')
    } else {
        $('.voltarTopo').removeClass('show');
        $('.flecha').addClass('show');
    }
  });
  $('.voltarTopo').click(function () {
    $("html, body").animate({scrollTop: 0}, 'easeInOutExpo');
    return false;
  });
  
  });

  document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
  /*  document.body.style.paddingTop = navbar_height + 'px'; */
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 


  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
      nav.classList.add('fundonav', 'shadow');
    } else {
      nav.classList.remove('fundonav', 'shadow',);
    }
  });