// coding with nick

// Js Documents

// Table of contyent
// 1.  vars and inits
    initSlider();
    initSlider1();
    initSlider2();
    initTimer();
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider
    function initSlider(){
        if($('.product_slider').length)
        {
            var slider1=$('.product_slider');

            slider1.owlCarousel({
                loop:false,
                dots:false,
                nav:false,
                responsive:{
                    0:{items:2},
                    480:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1280:{items:6},
                    1440:{items:6},
                }
            });
            if($('.product_slider_nav_left').length)
            {
                $('.product_slider_nav_left').on('click',function(){
                    slider1.trigger('prev.owl.carousel');
                });
            }
            if($('.product_slider_nav_right').length)
            {
                $('.product_slider_nav_right').on('click',function(){
                    slider1.trigger('next.owl.carousel');
                });
            }
        }
    }
    function initSlider1(){
        if($('.product_slider1').length)
        {
            var slider2=$('.product_slider1');

            slider2.owlCarousel({
                loop:false,
                dots:false,
                nav:false,
                responsive:{
                    0:{items:2},
                    480:{items:2},
                    768:{items:3},
                    991:{items:4},
                    1280:{items:6},
                    1440:{items:6},
                }
            });
            if($('.product_slider_nav_left1').length)
            {
                $('.product_slider_nav_left1').on('click',function(){
                    slider2.trigger('prev.owl.carousel');
                });
            }
            if($('.product_slider_nav_right1').length)
            {
                $('.product_slider_nav_right1').on('click',function(){
                    slider2.trigger('next.owl.carousel');
                });
            }
        }
    }
    function initSlider2(){
        if($('.product_slider2').length)
        {
            var slider3=$('.product_slider2');

            slider3.owlCarousel({
                loop:false,
                dots:false,
                nav:false,
                responsive:{
                    0:{items:6},
                    480:{items:6},
                    768:{items:8},
                    991:{items:8},
                    1024:{items:10},
                    1280:{items:11},
                    1440:{items:11},
                }
            });
            $('li').on('sortable:sort',function(event){
                alert("From " + event.detail.startIndex + " to " + event.detail.newIndex);
              });
        }
    }
    function initTimer(){
        if($('.timer').length){
            var target_date = new Date("Aug 13,2021").getTime();
            // var date = new Date();
            // date.setDate(date.getDate() + 3);
            // var target_date = date.getTime();
            //variable for time units
            var days,hours,minutes,seconds;
            var d = $('#day');
            var h = $('#hour');
            var m = $('#minute');
            var s = $('#second');

            setInterval(function() {
                //find the amount of "seconds" between now and target
                var current_date =new Date().getTime();
                var seconds_left =(target_date - current_date) / 1000;

                //do some time calculation
                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                //display result
                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);

            },1000 );
        }
    }
    function totop(){
        const top = document.querySelector(".to-top");
        window.addEventListener("scroll", () => {
            if (window.pageXOffset > 100){
                top.classList.add("active");
            }else{
                top.classList.remove("acrtive");
            }
        })
    }

