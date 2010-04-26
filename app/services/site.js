/**
 * @author thatcher
 */
/**
 * @author thatcher
 */
(function($, $S){
    
    var log,
        Apis,
        Distributables,
        Guides,
        Releases,
        News,
        Events;
    
    $S.Site = function(options){
        $.extend(true, this, options);
        log             = $.logger('EnvJS.Services.Site');
        Apis            = $.$('#apisModel');
        Distributables  = $.$('#distributablesModel');
        Guides          = $.$('#guidesModel');
        Releases        = $.$('#releasesModel');
        News            = $.$('#newsModel');
        Events          = $.$('#eventsModel');
    };
    
    $.extend($S.Site.prototype, {
        api: function(event){
            var id = event.params('id');
            Apis.forVersion(id, function(api){
                Releases.currentVersions(function(versions){
                    event.m({
                        id:         id,
                        api:        api,
                        versions:   versions,
                        template:   $.env( 'templates' ) +'html/pages/api/'+id+'.tmpl'
                    }).render();
                });
            });
        },
        docs: function(event){
            Releases.currentVersions(function(versions){
                event.m({
                    versions:   versions,
                    template:   $.env( 'templates' ) + 'html/pages/docs.tmpl'
                }).render();
            });
        },
        // Not to be confused, this function represents a calendar event
        // while the parameter event is the http request event
        events: function(event){
            Events.all(function(events){
                event.m({
                    events:     events,
                    template:   $.env( 'templates' ) + 'html/pages/events.tmpl'
                }).render();
            });
        },
        guide: function(event){
            var id = event.params('id');
            Guides.forVersion(id, function(guide){
                Releases.currentVersions(function(versions){
                    event.m({
                        id:         id,
                        guide:      guide,
                        versions:   versions,
                        template:   $.env( 'templates' ) +'html/pages/guide/'+id+'.tmpl'
                    }).render();
                });
            });
        },
        home: function(event){
            Releases.recent(2, function(releases){
                News.recent(3, function(news){
                    Events.recent(4, function(events){
                        event.m({
                            releases: releases,
                            news:     news,
                            events:   events,
                            template: $.env( 'templates' ) + 'html/pages/home.tmpl'
                        }).render();
                    });
                });
            });
        },
        news: function(event){
            News.all(function(news){
                event.m({
                    news:     news,
                    template: $.env( 'templates' ) + 'html/pages/news.tmpl'
                }).render()
            });
        },
        release: function(event){
            var id = event.params('id');
            Releases.forId(id, function(release){
                Distributables.forRelease(id, function(distributables){
                    event.m({
                        release: release,
                        distributables: distributables,
                        template:  $.env( 'templates' ) + 'html/pages/release.tmpl'
                    }).render()
                })
            });
        },
        releases: function(event){
            Releases.all(function(releases){
                event.m({
                    releases: releases, 
                    template: $.env( 'templates' ) + 'html/pages/releases.tmpl'
                }).render()
            });
        },
        support: function(event){
            var id = event.params('id');
            event.m({
                mailing_list:{
                    url: "http://groups.google.com/group/envjs",
                    name:"Google Groups"
                },
                issue_tracking:{
                    url: "http://envjs.lighthouseapp.com/projects/21590-envjs/overview",
                    name: "Lighthouse"
                },
                source_respository:{
                    url:"http://github.com/thatcher/env-js/tree/master",
                    name:"Github"
                },
                licenses: [{
                    url: "http://github.com/thatcher/env-js/tree/master/src/licenses/MIT-LICENSE.txt",
                    name: "MIT License"
                },{
                    url: "http://github.com/thatcher/env-js/tree/master/src/licenses/GPL-LICENSE.txt",
                    name: "GPL License"
                }],
                donations:{
                    url: "http://pledgie.com/campaigns/3860",
                    name: "Pledgie"
                },
                template:  $.env( 'templates' ) + 'html/pages/support.tmpl'
            }).render();
        },
        
    });
    
})(jQuery, EnvJS.Services);
