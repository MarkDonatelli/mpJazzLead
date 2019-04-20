$(document).ready(function(){
  

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

   

    $(function() {
	
        // Cache the Window object
        var $window = $(window);
        
        // Parallax Backgrounds
        
        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object
            
            $(window).scroll(function() {
            
                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!								
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                
                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
                
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
                
            }); // end window scroll
        });
        
    });

});


$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});

$().ready(function(){
    $('[rel="tooltip"]').tooltip();

});
























