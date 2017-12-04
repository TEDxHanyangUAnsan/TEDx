$(document).ready(function () {
    new WOW().init();
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#3e2a75', '#3e2a75', '#3e2a75','#3e2a75','#000000'],
        anchors: ['title', 'subject', 'speaker', 'about', 'profile', 'sponsor', 'contact'],
        menu: '#menu',
        scrollBar: true,
        slidesNavigation: true,
        responsiveWidth: 600,



        scrollingSpeed: 600,
        afterRender: function () {

        },
        afterLoad: function (anchorLink, index) {
            if(index == 1){
                console.log('title');
                // $('#applybutton').addClass('fadeOutRight');
                if($('#applybutton').hasClass('fadeInRight')){
                    $('#applybutton').removeClass('fadeInRight');
                    $('#applybutton').addClass('fadeOutRight');
                } else {
                    $('#applybutton').css('display','none');
                }
                $('#menu li a').css('color', '#cccccc');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });

            }
            else if (index == 2) {
                console.log('subject');

                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');

                $('#menu li a').css('color', '#cccccc');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
            }
            else if (index == 3) {
                console.log('speaker');

                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');



                $('#menu li a').css('color', '#cccccc');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });

            }
            else if(index == 4){
                console.log('about');
                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');

                $('#menu li a').css('color', '#cccccc');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
            }

            else if(index == 5) {
                console.log('profile');
                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');

                // $('#applybutton').removeClass('hasDisplay');
                $('#menu li a').css('color', '#cccccc');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
            }

            else if(index == 6) {
                console.log('sponsor');
                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');

                // $('#applybutton').removeClass('hasDisplay');
                $('#menu li a').css('color', '#cccccc');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "black");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
            }

            else if(index == 7) {
                console.log('contact');
                console.log($('#applybutton'));
                if($('#applybutton').hasClass('fadeInRight')){
                    $('#applybutton').removeClass('fadeInRight');
                    $('#applybutton').addClass('fadeOutRight');

                    console.log($('#applybutton'));

                } else {
                    $('#applybutton').css('display','none');
                }

                $('#menu li a').css('color', 'white');
                $('#menu li.active a').css('color', '#cccccc');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "#cccccc");
                });
            }
            //using anchorLink
        },
        onLeave: function (index, nextIndex, direction) {

            if ($('.wow').hasClass('animated')) {
                $('.wow').removeClass('animated');
                $('.wow').removeAttr('style');
            }
            if(index === 4){
                $('#menu li a').css('color', '#cccccc');

            }
            new WOW().init();
        },

    });

});

$().ready(function () {
    $('[rel="tooltip"]').tooltip();

});

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('active')) {
        $card.removeClass('active');

    } else {
        $card.addClass('active');

        console.log($card);

    }
}

function expandCard(index,element) {
    for(var i = 1; i<5; i++ ){
        var $selectedCard = $('.speaker'+i).parent();
        var $selectedImage = $('.speaker'+i).find('img');
        if($selectedCard.hasClass('col-sm-5')){
            $selectedCard.removeClass('col-sm-5');
            console.log($selectedImage);
            if($selectedImage[0].alt==="gudak"){
                $('#speaker1').removeClass('big_image');
                $('#speaker1').addClass('small_image');
                $('#speaker1').attr("src","./imgs/gudakSmall.png");

            }
            else if($selectedImage[0].alt==="errday"){
                $('#speaker2').removeClass('big_image');
                $('#speaker2').addClass('small_image');
                $('#speaker2').attr("src","./imgs/errdaySmall.png");
            }
            else if($selectedImage[0].alt==="note"){
                $('#speaker3').removeClass('big_image');
                $('#speaker3').addClass('small_image');
                $('#speaker3').attr("src","./imgs/noteSmall.png");

            }
            else {
                $('#speaker4').removeClass('big_image');
                $('#speaker4').addClass('small_image');
                $('#speaker4').attr("src","./imgs/noteSmall.png");

            }
            $selectedCard.addClass('col-sm-1');
        }

    }
    $('.speaker'+index).parent().removeClass('col-sm-1');
    $('.speaker'+index).parent().addClass('col-sm-5');
    if(element.alt === "gudak"){
        element.setAttribute('src', './imgs/gudakBig.png');
        element.setAttribute('class','big_image');
    }
    else if(element.alt === "errday"){
        element.setAttribute('src', './imgs/errdayBig.png');
        element.setAttribute('class','big_image');

    }
    else if(element.alt==="note"){
        element.setAttribute('src', './imgs/noteBig.png');
        element.setAttribute('class','big_image');

    }
    else  {
        element.setAttribute('src', './imgs/noteBig.png');
        element.setAttribute('class','big_image');
    }


}
