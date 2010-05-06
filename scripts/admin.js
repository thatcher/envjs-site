/**
 * @author thatcher
 */
(function($){

    $(document).ready(function(){
        $('#hide_deleted').bind('click', function(){
            $('.deleted').hide();
        });
        $('#show_deleted').bind('click', function(){
            $('.deleted').show();
        });
    });


})(jQuery);