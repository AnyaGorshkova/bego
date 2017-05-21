//jQuery is required to run this code
$( document ).ready(function() {


    $('.section-services__item').on('click', function(){
        var nameService = $(this),
            descriptionServive = nameService.find('.section-services__description'),
            optionService = nameService.find('.section-services__options'),
            titleService = nameService.find('.section-services__title-service'),
            rect = nameService.find('rect');
            console.log(rect);



        descriptionServive.addClass('section-services__description--active');
        optionService.addClass('section-services__options--active');
        titleService.addClass('section-services__title-service--active');
        rect.attr("class", "anim");;
        
    });

    $('.section-services__back-button').on('click', function(){
        alert('1');
        $('.section-services__description').removeClass('section-services__description--active');
        $('.section-services__options').removeClass('section-services__options--active');
        $('.section-services__title-service').removeClass('section-services__title-service--active');
        
    });
    






    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });



function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9qUXVlcnkgaXMgcmVxdWlyZWQgdG8gcnVuIHRoaXMgY29kZVxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICAkKCcuc2VjdGlvbi1zZXJ2aWNlc19faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIG5hbWVTZXJ2aWNlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25TZXJ2aXZlID0gbmFtZVNlcnZpY2UuZmluZCgnLnNlY3Rpb24tc2VydmljZXNfX2Rlc2NyaXB0aW9uJyksXHJcbiAgICAgICAgICAgIG9wdGlvblNlcnZpY2UgPSBuYW1lU2VydmljZS5maW5kKCcuc2VjdGlvbi1zZXJ2aWNlc19fb3B0aW9ucycpLFxyXG4gICAgICAgICAgICB0aXRsZVNlcnZpY2UgPSBuYW1lU2VydmljZS5maW5kKCcuc2VjdGlvbi1zZXJ2aWNlc19fdGl0bGUtc2VydmljZScpLFxyXG4gICAgICAgICAgICByZWN0ID0gbmFtZVNlcnZpY2UuZmluZCgncmVjdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWN0KTtcclxuXHJcblxyXG5cclxuICAgICAgICBkZXNjcmlwdGlvblNlcnZpdmUuYWRkQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX2Rlc2NyaXB0aW9uLS1hY3RpdmUnKTtcclxuICAgICAgICBvcHRpb25TZXJ2aWNlLmFkZENsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19vcHRpb25zLS1hY3RpdmUnKTtcclxuICAgICAgICB0aXRsZVNlcnZpY2UuYWRkQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UtLWFjdGl2ZScpO1xyXG4gICAgICAgIHJlY3QuYXR0cihcImNsYXNzXCIsIFwiYW5pbVwiKTs7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VjdGlvbi1zZXJ2aWNlc19fYmFjay1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGFsZXJ0KCcxJyk7XHJcbiAgICAgICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2Rlc2NyaXB0aW9uJykucmVtb3ZlQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX2Rlc2NyaXB0aW9uLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2VjdGlvbi1zZXJ2aWNlc19fb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19vcHRpb25zLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2VjdGlvbi1zZXJ2aWNlc19fdGl0bGUtc2VydmljZScpLnJlbW92ZUNsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX190aXRsZS1zZXJ2aWNlLS1hY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBzY2FsZVZpZGVvQ29udGFpbmVyKCk7XHJcblxyXG4gICAgaW5pdEJhbm5lclZpZGVvU2l6ZSgnLnZpZGVvLWNvbnRhaW5lciAucG9zdGVyIGltZycpO1xyXG4gICAgaW5pdEJhbm5lclZpZGVvU2l6ZSgnLnZpZGVvLWNvbnRhaW5lciAuZmlsdGVyJyk7XHJcbiAgICBpbml0QmFubmVyVmlkZW9TaXplKCcudmlkZW8tY29udGFpbmVyIHZpZGVvJyk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzY2FsZVZpZGVvQ29udGFpbmVyKCk7XHJcbiAgICAgICAgc2NhbGVCYW5uZXJWaWRlb1NpemUoJy52aWRlby1jb250YWluZXIgLnBvc3RlciBpbWcnKTtcclxuICAgICAgICBzY2FsZUJhbm5lclZpZGVvU2l6ZSgnLnZpZGVvLWNvbnRhaW5lciAuZmlsdGVyJyk7XHJcbiAgICAgICAgc2NhbGVCYW5uZXJWaWRlb1NpemUoJy52aWRlby1jb250YWluZXIgdmlkZW8nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzY2FsZVZpZGVvQ29udGFpbmVyKCkge1xyXG5cclxuICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKyA1O1xyXG4gICAgdmFyIHVuaXRIZWlnaHQgPSBwYXJzZUludChoZWlnaHQpICsgJ3B4JztcclxuICAgICQoJy5ob21lcGFnZS1oZXJvLW1vZHVsZScpLmNzcygnaGVpZ2h0Jyx1bml0SGVpZ2h0KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRCYW5uZXJWaWRlb1NpemUoZWxlbWVudCl7XHJcblxyXG4gICAgJChlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5kYXRhKCdoZWlnaHQnLCAkKHRoaXMpLmhlaWdodCgpKTtcclxuICAgICAgICAkKHRoaXMpLmRhdGEoJ3dpZHRoJywgJCh0aGlzKS53aWR0aCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNjYWxlQmFubmVyVmlkZW9TaXplKGVsZW1lbnQpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2NhbGVCYW5uZXJWaWRlb1NpemUoZWxlbWVudCl7XHJcblxyXG4gICAgdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCksXHJcbiAgICB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKyA1LFxyXG4gICAgdmlkZW9XaWR0aCxcclxuICAgIHZpZGVvSGVpZ2h0O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgJChlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZpZGVvQXNwZWN0UmF0aW8gPSAkKHRoaXMpLmRhdGEoJ2hlaWdodCcpLyQodGhpcykuZGF0YSgnd2lkdGgnKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS53aWR0aCh3aW5kb3dXaWR0aCk7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvd1dpZHRoIDwgMTAwMCl7XHJcbiAgICAgICAgICAgIHZpZGVvSGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICB2aWRlb1dpZHRoID0gdmlkZW9IZWlnaHQgLyB2aWRlb0FzcGVjdFJhdGlvO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7J21hcmdpbi10b3AnIDogMCwgJ21hcmdpbi1sZWZ0JyA6IC0odmlkZW9XaWR0aCAtIHdpbmRvd1dpZHRoKSAvIDIgKyAncHgnfSk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLndpZHRoKHZpZGVvV2lkdGgpLmhlaWdodCh2aWRlb0hlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuaG9tZXBhZ2UtaGVyby1tb2R1bGUgLnZpZGVvLWNvbnRhaW5lciB2aWRlbycpLmFkZENsYXNzKCdmYWRlSW4gYW5pbWF0ZWQnKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
