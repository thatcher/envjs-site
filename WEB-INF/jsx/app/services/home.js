/**
 * @author thatcher
 */
(function($, $$, $S){
    
    var log,
        releases,
        news,
        events;
    
    $S.Home = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Services.Home');
        releases = $.$('#releasesModel').get();
        news = $.$('#newsModel').get();
        events = $.$('#eventsModel').get();
    };
    
    $.extend($S.Home.prototype, new $$.Servlet(), {
        handleGet: function(request, response){
            log.debug('Serving page.');
            
            response.
                m({
                    recent:releases.slice(0,releases.length>1?2:1),
                    news: news.slice(0,news.length>2?3:news.length),
                    events: events.slice(0,events.length>2?3:events.length)
                }).
                render();
        }
    });
    
})(jQuery, Claypool.Server, EnvJS.Services);
