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
            if(anchorLink === 'title'){
                $('#applybutton').addClass('hasDisplay');
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
            if (anchorLink === 'subject' || 'speaker') {
                $('#applybutton').removeClass('hasDisplay');
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
                $('#applybutton').removeClass('hasDisplay');
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
            if(index === 4){
                $('#menu li a').css('color', 'black');

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
    if ($card.hasClass('active')) {
        $card.removeClass('active');

    } else {
        $card.addClass('active');

        console.log($card);

    }
}