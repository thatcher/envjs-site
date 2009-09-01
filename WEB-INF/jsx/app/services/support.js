/**
 * @author thatcher
 */
(function($, $$, $S){
    
    var log;
    
    $S.Support = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Services.Support');
    };
    
    $.extend($S.Support.prototype, new $$.Servlet(), {
        handleGet: function(request, response){
            log.debug('Serving page.');
            response.render();
        }
    });
    
})(jQuery, Claypool.Server, EnvJS.Services);
