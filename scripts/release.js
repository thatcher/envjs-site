/**
 * @author thatcher
 */
(function($){
    
    $( function(){ 
       $('a.paypal', $('#release')).bind('click', function(){
           $('form', $(this)).submit();
       }); 
    });
    
})(jQuery);
        