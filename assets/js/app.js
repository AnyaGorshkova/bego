//jQuery is required to run this code
$( document ).ready(function() {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9qUXVlcnkgaXMgcmVxdWlyZWQgdG8gcnVuIHRoaXMgY29kZVxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHNjYWxlVmlkZW9Db250YWluZXIoKTtcclxuXHJcbiAgICBpbml0QmFubmVyVmlkZW9TaXplKCcudmlkZW8tY29udGFpbmVyIC5wb3N0ZXIgaW1nJyk7XHJcbiAgICBpbml0QmFubmVyVmlkZW9TaXplKCcudmlkZW8tY29udGFpbmVyIC5maWx0ZXInKTtcclxuICAgIGluaXRCYW5uZXJWaWRlb1NpemUoJy52aWRlby1jb250YWluZXIgdmlkZW8nKTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNjYWxlVmlkZW9Db250YWluZXIoKTtcclxuICAgICAgICBzY2FsZUJhbm5lclZpZGVvU2l6ZSgnLnZpZGVvLWNvbnRhaW5lciAucG9zdGVyIGltZycpO1xyXG4gICAgICAgIHNjYWxlQmFubmVyVmlkZW9TaXplKCcudmlkZW8tY29udGFpbmVyIC5maWx0ZXInKTtcclxuICAgICAgICBzY2FsZUJhbm5lclZpZGVvU2l6ZSgnLnZpZGVvLWNvbnRhaW5lciB2aWRlbycpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNjYWxlVmlkZW9Db250YWluZXIoKSB7XHJcblxyXG4gICAgdmFyIGhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSArIDU7XHJcbiAgICB2YXIgdW5pdEhlaWdodCA9IHBhcnNlSW50KGhlaWdodCkgKyAncHgnO1xyXG4gICAgJCgnLmhvbWVwYWdlLWhlcm8tbW9kdWxlJykuY3NzKCdoZWlnaHQnLHVuaXRIZWlnaHQpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJhbm5lclZpZGVvU2l6ZShlbGVtZW50KXtcclxuXHJcbiAgICAkKGVsZW1lbnQpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmRhdGEoJ2hlaWdodCcsICQodGhpcykuaGVpZ2h0KCkpO1xyXG4gICAgICAgICQodGhpcykuZGF0YSgnd2lkdGgnLCAkKHRoaXMpLndpZHRoKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2NhbGVCYW5uZXJWaWRlb1NpemUoZWxlbWVudCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzY2FsZUJhbm5lclZpZGVvU2l6ZShlbGVtZW50KXtcclxuXHJcbiAgICB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKSxcclxuICAgIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSArIDUsXHJcbiAgICB2aWRlb1dpZHRoLFxyXG4gICAgdmlkZW9IZWlnaHQ7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cod2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAkKGVsZW1lbnQpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdmlkZW9Bc3BlY3RSYXRpbyA9ICQodGhpcykuZGF0YSgnaGVpZ2h0JykvJCh0aGlzKS5kYXRhKCd3aWR0aCcpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLndpZHRoKHdpbmRvd1dpZHRoKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93V2lkdGggPCAxMDAwKXtcclxuICAgICAgICAgICAgdmlkZW9IZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZpZGVvV2lkdGggPSB2aWRlb0hlaWdodCAvIHZpZGVvQXNwZWN0UmF0aW87XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsnbWFyZ2luLXRvcCcgOiAwLCAnbWFyZ2luLWxlZnQnIDogLSh2aWRlb1dpZHRoIC0gd2luZG93V2lkdGgpIC8gMiArICdweCd9KTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykud2lkdGgodmlkZW9XaWR0aCkuaGVpZ2h0KHZpZGVvSGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5ob21lcGFnZS1oZXJvLW1vZHVsZSAudmlkZW8tY29udGFpbmVyIHZpZGVvJykuYWRkQ2xhc3MoJ2ZhZGVJbiBhbmltYXRlZCcpO1xyXG5cclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
