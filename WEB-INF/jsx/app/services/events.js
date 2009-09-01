/**
 * @author thatcher
 */
(function($, $$, $S){
    
    var log,
        events;
    
    $S.Events = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Services.Events');
        events = $.$('#eventsModel').get();
    };
    
    $.extend($S.Events.prototype, new $$.Servlet(), {
        handleGet: function(request, response){
            log.debug('Serving page.');
            response.
                m({events:events}).
                render();
        }
    });
    
})(jQuery, Claypool.Server, EnvJS.Services);
