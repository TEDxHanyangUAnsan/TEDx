$(document).ready(function () {
    new WOW().init();
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['title', 'subject', 'speaker', 'about', 'profile', 'sponsor', 'contact'],
        menu: '#menu',
        scrollBar: true,
        slidesNavigation: true,

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
                $('#menu li a').css('color', 'black');
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

            else if(index == 6) {
                console.log('sponsor');
                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');

                // $('#applybutton').removeClass('hasDisplay');
                $('#menu li a').css('color', 'black');
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
                $('#applybutton').removeClass('fadeOutRight');
                $('#applybutton').css('display','inline-block');
                $('#applybutton').addClass('animated fadeInRight');

                // $('#applybutton').removeClass('hasDisplay');
                $('#menu li a').css('color', 'black');
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
        },
        afterResponsive: function(isResponsive){
            alert("Is responsive: " + isResponsive);
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

function expandCard(index) {
    for(var i = 1; i<5; i++ ){
        var $selectedCard = $('.speaker'+i);
        if($selectedCard.hasClass('big')){
            $selectedCard.removeClass('big');
            $selectedCard.addClass('small');
        }
    }
    $('.speaker'+index).addClass('big');
}
