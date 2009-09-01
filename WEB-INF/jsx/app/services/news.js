/**
 * @author thatcher
 */
(function($, $$, $S){
    
    var log,
        news;
    
    $S.News = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Services.News');
        news = $.$('#newsModel').get();
    };
    
    $.extend($S.News.prototype, new $$.Servlet(), {
        handleGet: function(request, response){
            log.debug('Serving page.');
            response.
                m({news:news}).
                render();
        }
    });
    
})(jQuery, Claypool.Server, EnvJS.Services);
