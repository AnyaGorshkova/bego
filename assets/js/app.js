//jQuery is required to run this code
$( document ).ready(function() {
    // 
    $('.section-services__img').on('click', function(){
        var nameService = $(this),
            descriptionServive = nameService.siblings('.section-services__description'),
            optionService = $('[data-target="landing"]');
            titleService = $('[data-target="landing-options"]'),
            rect = nameService.find('rect');
        descriptionServive.addClass('section-services__description--active');
        optionService.addClass('section-services__options--active');
        titleService.addClass('section-services__title-service--active');
        rect.attr("class", "anim");
        console.log('1');
        
    });



    $('.section-services__top-line-back').on('click', function(){
        var backButton = $(this),
            optionService = $('[data-target="landing"]'),
            titleService = $('[data-target="landing-options"]');
    
            optionService.removeClass('section-services__options--active');
            titleService.removeClass('section-services__title-service--active');
           
    });


    // open menu
    $('.main-nav__button').on('click', function(){

        var mainNav = $('.main-nav');
        mainNav.addClass('main-nav--active');
        console.log('!');
    });
     // open form order
    $('.section-services__button').on('click', function(){

        var formOrder = $('.form-order');
        formOrder.addClass('form-order--active');
        console.log('!');
    });
    // close form order
    $('.form-order__close').on('click', function(){

        var formOrder = $('.form-order');
        formOrder.removeClass('form-order--active');
        
    });
    // close menu
    $('.main-nav__close').on('click', function(){

        var mainNav = $('.main-nav');
        mainNav.removeClass('main-nav--active');
        
    });
    
$('.brief__next-button').on('click', function(){
        var activeItem = $('.brief__item--active'),
            nextItem = activeItem.next();
        activeItem.removeClass('brief__item--active');
        nextItem.addClass('brief__item--active');
    });







    
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8valF1ZXJ5IGlzIHJlcXVpcmVkIHRvIHJ1biB0aGlzIGNvZGVcclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIFxyXG4gICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2ltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIG5hbWVTZXJ2aWNlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25TZXJ2aXZlID0gbmFtZVNlcnZpY2Uuc2libGluZ3MoJy5zZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICBvcHRpb25TZXJ2aWNlID0gJCgnW2RhdGEtdGFyZ2V0PVwibGFuZGluZ1wiXScpO1xyXG4gICAgICAgICAgICB0aXRsZVNlcnZpY2UgPSAkKCdbZGF0YS10YXJnZXQ9XCJsYW5kaW5nLW9wdGlvbnNcIl0nKSxcclxuICAgICAgICAgICAgcmVjdCA9IG5hbWVTZXJ2aWNlLmZpbmQoJ3JlY3QnKTtcclxuICAgICAgICBkZXNjcmlwdGlvblNlcnZpdmUuYWRkQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX2Rlc2NyaXB0aW9uLS1hY3RpdmUnKTtcclxuICAgICAgICBvcHRpb25TZXJ2aWNlLmFkZENsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19vcHRpb25zLS1hY3RpdmUnKTtcclxuICAgICAgICB0aXRsZVNlcnZpY2UuYWRkQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UtLWFjdGl2ZScpO1xyXG4gICAgICAgIHJlY3QuYXR0cihcImNsYXNzXCIsIFwiYW5pbVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnMScpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKCcuc2VjdGlvbi1zZXJ2aWNlc19fdG9wLWxpbmUtYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGJhY2tCdXR0b24gPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBvcHRpb25TZXJ2aWNlID0gJCgnW2RhdGEtdGFyZ2V0PVwibGFuZGluZ1wiXScpLFxyXG4gICAgICAgICAgICB0aXRsZVNlcnZpY2UgPSAkKCdbZGF0YS10YXJnZXQ9XCJsYW5kaW5nLW9wdGlvbnNcIl0nKTtcclxuICAgIFxyXG4gICAgICAgICAgICBvcHRpb25TZXJ2aWNlLnJlbW92ZUNsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19vcHRpb25zLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgdGl0bGVTZXJ2aWNlLnJlbW92ZUNsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX190aXRsZS1zZXJ2aWNlLS1hY3RpdmUnKTtcclxuICAgICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBvcGVuIG1lbnVcclxuICAgICQoJy5tYWluLW5hdl9fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIG1haW5OYXYgPSAkKCcubWFpbi1uYXYnKTtcclxuICAgICAgICBtYWluTmF2LmFkZENsYXNzKCdtYWluLW5hdi0tYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyEnKTtcclxuICAgIH0pO1xyXG4gICAgIC8vIG9wZW4gZm9ybSBvcmRlclxyXG4gICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBmb3JtT3JkZXIgPSAkKCcuZm9ybS1vcmRlcicpO1xyXG4gICAgICAgIGZvcm1PcmRlci5hZGRDbGFzcygnZm9ybS1vcmRlci0tYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyEnKTtcclxuICAgIH0pO1xyXG4gICAgLy8gY2xvc2UgZm9ybSBvcmRlclxyXG4gICAgJCgnLmZvcm0tb3JkZXJfX2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1PcmRlciA9ICQoJy5mb3JtLW9yZGVyJyk7XHJcbiAgICAgICAgZm9ybU9yZGVyLnJlbW92ZUNsYXNzKCdmb3JtLW9yZGVyLS1hY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgLy8gY2xvc2UgbWVudVxyXG4gICAgJCgnLm1haW4tbmF2X19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBtYWluTmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcbiAgICAgICAgbWFpbk5hdi5yZW1vdmVDbGFzcygnbWFpbi1uYXYtLWFjdGl2ZScpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuJCgnLmJyaWVmX19uZXh0LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSAkKCcuYnJpZWZfX2l0ZW0tLWFjdGl2ZScpLFxyXG4gICAgICAgICAgICBuZXh0SXRlbSA9IGFjdGl2ZUl0ZW0ubmV4dCgpO1xyXG4gICAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2JyaWVmX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICBuZXh0SXRlbS5hZGRDbGFzcygnYnJpZWZfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
