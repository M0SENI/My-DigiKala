$(document).ready(function () {
    $('.daste').hover(function () {
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.item-list').css('display' , 'block')
        $('.org-daste').css('display' , "block")
        $('.div-slider').fadeOut(800)
    }
    , function () {
        $('#arrow-down').css('display', " inline")
        $('#arrow-top').css('display' , "none")
        $('.item-list').css('display' , 'none')
        $('.org-daste').css('display' , "none")

        })
    $('.item-list').hover(function () {
        $(this).show()
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.org-daste').css('display' , "block")

    }
     , function () {
           $('.item-list').css('display' , "none")
        })
    $('.mobile').hover(function () {
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.big-listitem').css('display' , "flex")
        $('.org-daste').css('display' , "block")

        }
    , function () {
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.big-listitem').css('display' , "none")
        })
    $('.big-listitem').hover(function () {
        $(this).css('display' , "flex")
        $('.item-list').css('display' , "block")
        $('#arrow-down').css('display', "none")
        $('#arrow-top').css('display' , "inline")
        $('.org-daste').css('display' , "block")


        }
    , function () {
        $('#arrow-down').css('display', " inline")
        $('#arrow-top').css('display' , "none")
        $('.item-list').css('display' , "none")
        $('.big-listitem').css('display' , "none")
        $('.org-daste').css('display' , "none")


        })
    /*Slider*/

    var SliderTag = $('.div-slider');
    var Sliderimg = SliderTag.find('img');
    var NextSlide=1
    var arrowright = $('#arrow-right')
    var arrowleft = $('#arrow-left');
    var numberofsliders = Sliderimg.length;
    var timeOut=5000

    function slider() {
        if (NextSlide > numberofsliders) {
            NextSlide = 1;

        }

        if (NextSlide < 1) {
            NextSlide = numberofsliders;

        }

        Sliderimg.hide()
        Sliderimg.eq(NextSlide - 1).fadeIn(200)
        NextSlide++;


    }
    function gonext() {
        slider();
        clearInterval(slide);

    }
    arrowright.click(function () {
        gonext();
    });
    arrowleft.click(function () {
        goperv();
    });
    var slide = setInterval(slider , timeOut);
    function goperv() {
        NextSlide = NextSlide - 2;
        slider();
        clearInterval(slide);

    }











    /*function sliderright() {
        Sliderimg.hide()
        arrowright.show()
        arrowleft.show()
        Sliderimg.eq(NextSlide+1).fadeIn(200)
        NextSlide++;
        if(NextSlide > numberofsliders)
            Sliderimg.eq(NextSlide=0).fadeIn(200)

    }
    arrowright.click(function () {
        sliderright()
    })
    function sliderleft() {
        Sliderimg.hide()
        arrowleft.show()
        arrowright.show()
        Sliderimg.eq(NextSlide+1).fadeIn(200)
        NextSlide--;
    }
    arrowleft.click(function () {
        sliderleft()
    })*/

})
