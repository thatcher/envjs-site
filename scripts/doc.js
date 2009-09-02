/**
 * @author thatcher
 */
(function($){
    
    $( function(){ 
       $('pre.box > code', $('#doc')).each(function(){
           $(this).text($(this).text().replace('&#x7B;','{','g'));
       }); 
    });
    
})(jQuery);
        