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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8valF1ZXJ5IGlzIHJlcXVpcmVkIHRvIHJ1biB0aGlzIGNvZGVcclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBuYW1lU2VydmljZSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uU2Vydml2ZSA9IG5hbWVTZXJ2aWNlLmZpbmQoJy5zZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICBvcHRpb25TZXJ2aWNlID0gbmFtZVNlcnZpY2UuZmluZCgnLnNlY3Rpb24tc2VydmljZXNfX29wdGlvbnMnKSxcclxuICAgICAgICAgICAgdGl0bGVTZXJ2aWNlID0gbmFtZVNlcnZpY2UuZmluZCgnLnNlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UnKSxcclxuICAgICAgICAgICAgcmVjdCA9IG5hbWVTZXJ2aWNlLmZpbmQoJ3JlY3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVjdCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZGVzY3JpcHRpb25TZXJ2aXZlLmFkZENsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgb3B0aW9uU2VydmljZS5hZGRDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fb3B0aW9ucy0tYWN0aXZlJyk7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLmFkZENsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX190aXRsZS1zZXJ2aWNlLS1hY3RpdmUnKTtcclxuICAgICAgICByZWN0LmF0dHIoXCJjbGFzc1wiLCBcImFuaW1cIik7O1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2JhY2stYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhbGVydCgnMScpO1xyXG4gICAgICAgICQoJy5zZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbicpLnJlbW92ZUNsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX29wdGlvbnMnKS5yZW1vdmVDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fb3B0aW9ucy0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UnKS5yZW1vdmVDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fdGl0bGUtc2VydmljZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgc2NhbGVWaWRlb0NvbnRhaW5lcigpO1xyXG5cclxuICAgIGluaXRCYW5uZXJWaWRlb1NpemUoJy52aWRlby1jb250YWluZXIgLnBvc3RlciBpbWcnKTtcclxuICAgIGluaXRCYW5uZXJWaWRlb1NpemUoJy52aWRlby1jb250YWluZXIgLmZpbHRlcicpO1xyXG4gICAgaW5pdEJhbm5lclZpZGVvU2l6ZSgnLnZpZGVvLWNvbnRhaW5lciB2aWRlbycpO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2NhbGVWaWRlb0NvbnRhaW5lcigpO1xyXG4gICAgICAgIHNjYWxlQmFubmVyVmlkZW9TaXplKCcudmlkZW8tY29udGFpbmVyIC5wb3N0ZXIgaW1nJyk7XHJcbiAgICAgICAgc2NhbGVCYW5uZXJWaWRlb1NpemUoJy52aWRlby1jb250YWluZXIgLmZpbHRlcicpO1xyXG4gICAgICAgIHNjYWxlQmFubmVyVmlkZW9TaXplKCcudmlkZW8tY29udGFpbmVyIHZpZGVvJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2NhbGVWaWRlb0NvbnRhaW5lcigpIHtcclxuXHJcbiAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpICsgNTtcclxuICAgIHZhciB1bml0SGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0KSArICdweCc7XHJcbiAgICAkKCcuaG9tZXBhZ2UtaGVyby1tb2R1bGUnKS5jc3MoJ2hlaWdodCcsdW5pdEhlaWdodCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmFubmVyVmlkZW9TaXplKGVsZW1lbnQpe1xyXG5cclxuICAgICQoZWxlbWVudCkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuZGF0YSgnaGVpZ2h0JywgJCh0aGlzKS5oZWlnaHQoKSk7XHJcbiAgICAgICAgJCh0aGlzKS5kYXRhKCd3aWR0aCcsICQodGhpcykud2lkdGgoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzY2FsZUJhbm5lclZpZGVvU2l6ZShlbGVtZW50KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjYWxlQmFubmVyVmlkZW9TaXplKGVsZW1lbnQpe1xyXG5cclxuICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpLFxyXG4gICAgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpICsgNSxcclxuICAgIHZpZGVvV2lkdGgsXHJcbiAgICB2aWRlb0hlaWdodDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICQoZWxlbWVudCkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB2aWRlb0FzcGVjdFJhdGlvID0gJCh0aGlzKS5kYXRhKCdoZWlnaHQnKS8kKHRoaXMpLmRhdGEoJ3dpZHRoJyk7XHJcblxyXG4gICAgICAgICQodGhpcykud2lkdGgod2luZG93V2lkdGgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3dXaWR0aCA8IDEwMDApe1xyXG4gICAgICAgICAgICB2aWRlb0hlaWdodCA9IHdpbmRvd0hlaWdodDtcclxuICAgICAgICAgICAgdmlkZW9XaWR0aCA9IHZpZGVvSGVpZ2h0IC8gdmlkZW9Bc3BlY3RSYXRpbztcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoeydtYXJnaW4tdG9wJyA6IDAsICdtYXJnaW4tbGVmdCcgOiAtKHZpZGVvV2lkdGggLSB3aW5kb3dXaWR0aCkgLyAyICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS53aWR0aCh2aWRlb1dpZHRoKS5oZWlnaHQodmlkZW9IZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmhvbWVwYWdlLWhlcm8tbW9kdWxlIC52aWRlby1jb250YWluZXIgdmlkZW8nKS5hZGRDbGFzcygnZmFkZUluIGFuaW1hdGVkJyk7XHJcblxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
