

(function ($) {
	"use Strict";
    $('.notification-close').on('click', function() {
        $('.notification-area').slideUp();
    });
$( '.currency-language-menu > li > a' ).on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('active')) {
        $( '.currency-language-menu > li > a' ).removeClass('active').siblings('.currency-language-dropdown-menu').slideUp()
        $(this).removeClass('active').siblings('.currency-language-dropdown-menu').slideUp();
    } else {
        $( '.currency-language-menu > li > a' ).removeClass('active').siblings('.currency-language-dropdown-menu').slideUp()
        $(this).addClass('active').siblings('.currency-language-dropdown-menu').slideDown();
    }
}); 
/*---------------------------
    Nice Select
------------------------------- */	
$('.nice-select').niceSelect(); 
/*---------------------------
    Mini Cart Hover Active
----------------------------*/
$('.header-cart').hide();
    $('.mini-cart').hover(
      function() {
        if( $(this).children('div').size() > 0 && $(this).children().hasClass('header-cart') ) {
            $(this).children().stop().slideDown(400);
        }
      }, function() {
        $(this).children('.header-cart').stop().slideUp(300);
      }
);
/*--------------------------
  nivo slider active
--------------------------*/
$('#slider').nivoSlider({
    directionNav: true,
    animSpeed: 500,
    effect: 'random',
    slices: 18,
    pauseTime: 10000,
    pauseOnHover: false,
    controlNav: true,
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
});
/*----------------------------------- 
    Count Down Active 
----------------------------------*/ 
$('[data-countdown]').each(function() {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="single-count"><span class="count">%D</span>Day</div><div class="single-count"><span class="count">%H</span>Hrs</div><div class="single-count"><span class="count">%M</span>Mins</div><div class="single-count"><span class="count">%S</span>Secs</div>'));
	});
}); 

    
/*------- 
    discount Slider Active 
----------------------------------*/
 $('.discount-product-active').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
/*------- 
    Product Slider Active 
----------------------------------*/
 $('.product-tab-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })
/*------- 
    Product Slider Active 
----------------------------------*/
 $('.product-sidebar-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
/*------- 
    Electronic Product Slider Active 
----------------------------------*/
 $('.electronic-product-tab-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
/*------- 
    Deal Product Slider Active 
----------------------------------*/
 $('.deal-product-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
/*------- 
    Deal Product Slider 2 Active 
----------------------------------*/
 $('.deal-product-slider2').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
/*------- 
    list-product-active 
----------------------------------*/
 $('.list-product-active').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
/*------- 
    Discount Product Slider Active 
----------------------------------*/
 $('.discount-product-slider').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
/*------- 
    Categorie Product Slider Active 
----------------------------------*/
 $('.categorie-produtct-slider').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
/*------- 
    Categorie Product Slider Active 
----------------------------------*/
 $('.categorie-produtct-slider-6').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            900: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
/*------- 
    List Product Slider Active 
----------------------------------*/
var listProductSlider = $('.list-product-slider');
listProductSlider.owlCarousel({
    smartSpeed: 1000,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})
function listProductSliderClasses() {
    listProductSlider.each(function() {
        var total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item').removeClass('firstActiveItem');
        $(this).find('.owl-item').removeClass('lastActiveItem');
        $(this).find('.owl-item.active').each(function(index) {
            if (index === 0) {
                $(this).addClass('firstActiveItem')
            }
            if (index === total - 1 && total > 1) {
                $(this).addClass('lastActiveItem')
            }
        })
    })
}
listProductSliderClasses();
listProductSlider.on('translated.owl.carousel', function(event) {
    listProductSliderClasses()
});
/*------- 
    product-tab-slider-6 Active 
----------------------------------*/
var productTabSlider = $('.product-tab-slider-6');
productTabSlider.owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
})
function productTabSliderClasses() {
    productTabSlider.each(function() {
        var total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item').removeClass('firstActiveItem');
        $(this).find('.owl-item').removeClass('lastActiveItem');
        $(this).find('.owl-item.active').each(function(index) {
            if (index === 0) {
                $(this).addClass('firstActiveItem')
            }
            if (index === total - 1 && total > 1) {
                $(this).addClass('lastActiveItem')
            }
        })
    })
}
productTabSliderClasses();
productTabSlider.on('translated.owl.carousel', function(event) {
    productTabSliderClasses()
});
/*--------
    Brand Active
----------------------------------*/
 $('.brand-active').owlCarousel({
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
})
/*--------
    blog Active
----------------------------------*/
 $('.blog-active').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
})
/*--------
    blog Active 5
----------------------------------*/
 $('.blog-active-5').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
})
/*--------
    testimonial Active
----------------------------------*/
 $('.testimonial-active').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
}) 
/*-------- 
     Testimonial 2 Slider 
----------------------------------*/
 $('.testimonial-slider').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
}) 
/*--------
    Featured Product Active
----------------------------------*/
 $('.featured-product-active').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2 
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
})
/*------- 
    Blog Gallery Post Active 
----------------------------------*/
 $('.post-gallery').owlCarousel({
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    }) 
/*--------------------------
	 Category Menu Active
---------------------------- */
 $('.rx-parent').on('click', function(){
    $('.rx-child').slideToggle();
    $(this).toggleClass('rx-change');
});
//    category heading
$('.category-heading').on('click', function(){
    $('.category-menu-list').slideToggle(300);
});	
/*-- Category Menu Toggles --*/
function categorySubMenuToggle() {
    var screenSize = $(window).width();
    if ( screenSize <= 991) {
        $('#cate-toggle .right-menu > a').prepend('<i class="expand menu-expand"></i>');
        $('.category-menu .right-menu ul').slideUp();
//        $('.category-menu .menu-item-has-children i').on('click', function(e){
//            e.preventDefault();
//            $(this).toggleClass('expand');
//            $(this).siblings('ul').css('transition', 'none').slideToggle();
//        })
    } else {
        $('.category-menu .right-menu > a i').remove();
        $('.category-menu .right-menu ul').slideDown();
    }
}
categorySubMenuToggle();
$(window).resize(categorySubMenuToggle);

/*-- Category Sub Menu --*/
function categoryMenuHide(){
    var screenSize = $(window).width();
    if ( screenSize <= 991) {
        $('.category-menu-list').hide();
    } else {
        $('.category-menu-list').show();
    }
}
categoryMenuHide();
$(window).resize(categoryMenuHide);
$('.category-menu-hidden').find('.category-menu-list').hide();
$('.category-menu-list').on('click', 'li a, li a .menu-expand', function(e) {
    var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
    if ($a.parent().hasClass('right-menu')) {
        if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
            if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
            else {
                $(this).parents('li').siblings('li').find('ul:visible').slideUp();
                $a.siblings('ul').slideDown();
            }
        }
    }
    if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
        e.preventDefault();
        return false;
    }
});
/*---------------------------------
     Mean Menu Active
-----------------------------------*/
jQuery('.header-menu-area nav').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
})
/*----------------------------------
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="fa fa-arrow-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
/*------------------------------
    Shop Category Active
------------------------------*/
$('#cate-toggle li.has-sub>a,#cate-mobile-toggle li.has-sub>a,#shop-cate-toggle li.has-sub>a').on('click', function () {
    $(this).removeAttr('href');
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
    } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
    }
});
$('#cate-toggle>ul>li.has-sub>a').append('<span class="holder"></span>');
/*----------------------------------- 
    Single Product Side Menu Active 
--------------------------------------*/  
$('.single-slide-menu').slick({
		prevArrow: '<i class="fa fa-angle-left"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
	});
$('.modal').on('shown.bs.modal', function (e) {
    $('.single-slide-menu').resize();
})
    
$('.single-slide-menu a').on('click',function(e){
      e.preventDefault();
     
      var $href = $(this).attr('href');
     
      $('.single-slide-menu a').removeClass('active');
      $(this).addClass('active');
     
      $('.product-details-large .tab-pane').removeClass('active show');
      $('.product-details-large '+ $href ).addClass('active show');
     
  })
/*------------------------------ 
10. Cart Plus Minus Button
---------------------------------*/
 $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="zmdi zmdi-chevron-down"></i></div><div class="inc qtybutton"><i class="zmdi zmdi-chevron-up"></i></div>');
  $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
      }
      }
    $button.parent().find("input").val(newVal);
  });
/* --------------------------------------------------------
	 Venobox Active
* -------------------------------------------------------*/  
$('.venobox').venobox({
    border: '10px',
    titleattr: 'data-title',
    numeratio: true,
    infinigall: true
}); 
/*------------------------------ 
    Toggle Function Active
---------------------------------*/   
/*--- showlogin toggle function ----*/
$('#showlogin').on('click', function() {
    $('#checkout-login').slideToggle(900);
});

/*--- showlogin toggle function ----*/
$('#showcoupon').on('click', function() {
    $('#checkout_coupon').slideToggle(900);
});
/*--- showlogin toggle function ----*/
$('#cbox').on('click', function() {
    $('#cbox-info').slideToggle(900);
});

/*--- showlogin toggle function ----*/
$('#ship-box').on('click', function() {
    $('#ship-box-info').slideToggle(1000);
});
/* --------------------------------------------------------
	FAQ-accordion
* -------------------------------------------------------*/ 
  $('.card-header a').on('click', function() {
    $('.card').removeClass('actives');
    $(this).parents('.card').addClass('actives');
  });


})(jQuery);