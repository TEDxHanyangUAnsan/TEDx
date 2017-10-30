$(document).ready(function () {
    new WOW().init();
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['title', 'subject', 'speaker', 'about', 'profile', 'sponsor', 'contact'],
        menu: '#menu',
        fadingEffect: true,
        scrollBar: true,
        slidesNavigation: true,

        scrollingSpeed: 600,
        afterRender: function () {

        },
        afterLoad: function (anchorLink, index) {

            if (anchorLink === 'title' || 'subject' || 'speaker') {



                $('#menu li a').css('color', 'white');
                $('#menu li.active a').css('color', 'white');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "white");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "white");
                });


            }

            if (anchorLink === 'about') {

                $('#menu li a').css('color', 'black');
                $('#menu li.active a').css('color', 'white');
                $("#menu li a").hover(function(){
                    $(this).css("color", "red");
                }, function(){
                    $(this).css("color", "black");
                });
                $("#menu li.active a").hover(function(){
                    $(this).css("color", "white");
                }, function(){
                    $(this).css("color", "white");
                });


            }
            //using anchorLink

        },
        onLeave: function (index, nextIndex, direction) {

            if ($('.wow').hasClass('animated')) {
                $('.wow').removeClass('animated');
                $('.wow').removeAttr('style');
            }
            new WOW().init();
        }
    });

});

$().ready(function () {
    $('[rel="tooltip"]').tooltip();

});

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}