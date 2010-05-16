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
        docs: function(event){
            Releases.currentVersions(function(versions){
                event.m({
                    versions:   versions,
                    template:   $.env( 'templates' ) + 'html/pages/docs.tmpl'
                }).render();
            });
        },
        doc: function(event){
            var type = event.params('type');
            log.debug('loading %s doc', type)
            
            Docs = type == 'guides' ? Guides : Apis;
            
            Docs.all(function(docs){
                var contents, i;
                for(i=0; i < docs.length; i++){
                    if('table-of-contents' === docs[i].name){
                        contents = docs[i];
                        break;
                    }
                }
                Releases.currentVersions(function(versions){
                    event.m({
                        title:      type == 'guide' ? "Guides" : "Apis",
                        type:       type,
                        docs:       docs,
                        pages:      contents.page.split('|'),
                        versions:   $(versions).map(function(index, version){
                            return {
                                doc:{
                                    link: $.env( "root" ) + "doc/"+(type == 'guide' ? "apis" : "guides"),
                                    title: version.name
                                },
                                release: {
                                    link: $.env( "root" ) + "release/",
                                    title: version.$id
                                }
                            };
                        }).get(),
                        template:   $.env( 'templates' ) +'html/pages/doc.tmpl',
                        links:  {
                            docs:   $.env( "root" ) + "docs",
                        }
                    }).render();
                });
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
        home: function(event){
            Releases.recent(3, function(releases){
                News.recent(3, function(news){
                    Events.recent(2, function(events){
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
            log.debug('looking up release id %s', id);
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
        test: function(event){
            event.m({
                template: $.env( 'templates' ) + 'html/pages/test.tmpl'
            }).render()
        }
        
    });
    
})(jQuery, EnvJS.Services);
