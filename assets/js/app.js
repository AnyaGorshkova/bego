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
    






    
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2pRdWVyeSBpcyByZXF1aXJlZCB0byBydW4gdGhpcyBjb2RlXHJcbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICQoJy5zZWN0aW9uLXNlcnZpY2VzX19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgbmFtZVNlcnZpY2UgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblNlcnZpdmUgPSBuYW1lU2VydmljZS5maW5kKCcuc2VjdGlvbi1zZXJ2aWNlc19fZGVzY3JpcHRpb24nKSxcclxuICAgICAgICAgICAgb3B0aW9uU2VydmljZSA9IG5hbWVTZXJ2aWNlLmZpbmQoJy5zZWN0aW9uLXNlcnZpY2VzX19vcHRpb25zJyksXHJcbiAgICAgICAgICAgIHRpdGxlU2VydmljZSA9IG5hbWVTZXJ2aWNlLmZpbmQoJy5zZWN0aW9uLXNlcnZpY2VzX190aXRsZS1zZXJ2aWNlJyksXHJcbiAgICAgICAgICAgIHJlY3QgPSBuYW1lU2VydmljZS5maW5kKCdyZWN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlY3QpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uU2Vydml2ZS5hZGRDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fZGVzY3JpcHRpb24tLWFjdGl2ZScpO1xyXG4gICAgICAgIG9wdGlvblNlcnZpY2UuYWRkQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX29wdGlvbnMtLWFjdGl2ZScpO1xyXG4gICAgICAgIHRpdGxlU2VydmljZS5hZGRDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fdGl0bGUtc2VydmljZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgcmVjdC5hdHRyKFwiY2xhc3NcIiwgXCJhbmltXCIpOztcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zZWN0aW9uLXNlcnZpY2VzX19iYWNrLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWxlcnQoJzEnKTtcclxuICAgICAgICAkKCcuc2VjdGlvbi1zZXJ2aWNlc19fZGVzY3JpcHRpb24nKS5yZW1vdmVDbGFzcygnc2VjdGlvbi1zZXJ2aWNlc19fZGVzY3JpcHRpb24tLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zZWN0aW9uLXNlcnZpY2VzX19vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX29wdGlvbnMtLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zZWN0aW9uLXNlcnZpY2VzX190aXRsZS1zZXJ2aWNlJykucmVtb3ZlQ2xhc3MoJ3NlY3Rpb24tc2VydmljZXNfX3RpdGxlLXNlcnZpY2UtLWFjdGl2ZScpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
