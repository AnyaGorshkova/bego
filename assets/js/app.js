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



    $('.order').on('click', function(){

        var formOrder = $('.mnu');
        formOrder.addClass('form-order--active');
        
    });

    $('.form-order__close').on('click', function(){

        var formOrder = $('.mnu');
        formOrder.removeClass('form-order--active');
        
    });
    






    
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8valF1ZXJ5IGlzIHJlcXVpcmVkIHRvIHJ1biB0aGlzIGNvZGVcclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBuYW1lU2VydmljZSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uU2Vydml2ZSA9IG5hbWVTZXJ2aWNlLmZpbmQoJy5zZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbicpLFxyXG4gICAgICAgICAgICBvcHRpb25TZXJ2aWNlID0gbmFtZVNlcnZpY2UuZmluZCgnLnNlY3Rpb24tc2VydmljZXNfX29wdGlvbnMnKSxcclxuICAgICAgICAgICAgdGl0bGVTZXJ2aWNlID0gbmFtZVNlcnZpY2UuZmluZCgnLnNlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UnKSxcclxuICAgICAgICAgICAgcmVjdCA9IG5hbWVTZXJ2aWNlLmZpbmQoJ3JlY3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVjdCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZGVzY3JpcHRpb25TZXJ2aXZlLmFkZENsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgb3B0aW9uU2VydmljZS5hZGRDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fb3B0aW9ucy0tYWN0aXZlJyk7XHJcbiAgICAgICAgdGl0bGVTZXJ2aWNlLmFkZENsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX190aXRsZS1zZXJ2aWNlLS1hY3RpdmUnKTtcclxuICAgICAgICByZWN0LmF0dHIoXCJjbGFzc1wiLCBcImFuaW1cIik7O1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX2JhY2stYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhbGVydCgnMScpO1xyXG4gICAgICAgICQoJy5zZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbicpLnJlbW92ZUNsYXNzKCdzZWN0aW9uLXNlcnZpY2VzX19kZXNjcmlwdGlvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX29wdGlvbnMnKS5yZW1vdmVDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fb3B0aW9ucy0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UnKS5yZW1vdmVDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fdGl0bGUtc2VydmljZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoJy5vcmRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBmb3JtT3JkZXIgPSAkKCcubW51Jyk7XHJcbiAgICAgICAgZm9ybU9yZGVyLmFkZENsYXNzKCdmb3JtLW9yZGVyLS1hY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5mb3JtLW9yZGVyX19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBmb3JtT3JkZXIgPSAkKCcubW51Jyk7XHJcbiAgICAgICAgZm9ybU9yZGVyLnJlbW92ZUNsYXNzKCdmb3JtLW9yZGVyLS1hY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
