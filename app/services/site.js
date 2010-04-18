/**
 * @author thatcher
 */
/**
 * @author thatcher
 */
(function($, $S){
    
    var log,
        Docs,
        Releases,
        News,
        Events;
    
    $S.Site = function(options){
        $.extend(true, this, options);
        log         = $.logger('EnvJS.Services.Site');
        Docs        = $.$('#docsModel');
        Releases    = $.$('#releasesModel');
        News        = $.$('#newsModel');
        Events      = $.$('#eventsModel');
    };
    
    $.extend($S.Site.prototype, {
        api: function(event){
            var id = event.params('id');
            event.m({
                id:         id,
                doc:        Docs.forVersion('api', id),
                releases:   Releases.get(id),
                template:    $.env( 'templates' ) +'html/pages/api/'+id+'.tmpl'
            }).render();
        },
        docs: function(event){
            event.m({
                docs:       Docs.get(),
                template:   $.env( 'templates' ) + 'html/pages/docs.tmpl'
            }).render();
        },
        // Not to be confused, this function represents a calendar event
        // while the parameter event is the http request event
        events: function(event){
            event.m({
                events:     Events.get(),
                template:  $.env( 'templates' ) + 'html/pages/events.tmpl'
            }).render();
        },
        guide: function(event){
            var id = event.params('id');
            event.m({
                id:         id,
                doc:        Docs.forVersion('guide', id),
                releases:   Releases.get(id),
                template:    $.env( 'templates' ) +'html/pages/guide/'+id+'.tmpl'
            }).render();
        },
        home: function(event){
            log.debug('Serving page.');
            event.m({
                releases: Releases.recent(),
                news:     News.recent(),
                events:   Events.recent(),
                template: $.env( 'templates' ) + 'html/pages/home.tmpl'
            }).render();
        },
        news: function(event){
            event.m({
                news:     News.get(),
                template: $.env( 'templates' ) + 'html/pages/news.tmpl'
            }).render();
        },
        release: function(event){
            var id = event.params('id');
            event.m({
                release: Releases.forId(id),
                template:  $.env( 'templates' ) + 'html/pages/release.tmpl'
            }).render();
        },
        releases: function(event){
            event.m({
                releases: Releases.get(),
                template: $.env( 'templates' ) + 'html/pages/releases.tmpl'
            }).render();

        },
        support: function(event){
            var id = event.params('id');
            event.m({
                template:  $.env( 'templates' ) + 'html/pages/support.tmpl'
            }).render();
        },
        
    });
    
})(jQuery, EnvJS.Services);
