/**
 * @author thatcher
 */
(function($, $$, $S, $M){
    
    var log,
        docs,
        releases;
    
    $S.Docs = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Services.Docs');
        docs = $.$('#docsModel').get();
        releases = $.$('#releasesModel').get();
    };
    
    $.extend($S.Docs.prototype, new $$.Servlet(), {
        handleGet: function(request, response){
            log.debug('Serving page.');
            var id = response.params('id'),
                doc, 
                release = [],
                i;
            if(id){
                //find the docs based on the id passed
                for(i=0;i<docs.length;i++){
                    if(docs[i].doc == id){
                        doc = docs[i];
                        break;
                    }
                }
                //find the releases for this doc
                if(doc){
                    for(i=0;i<releases.length;i++){
                        if(releases[i].doc == doc.id){
                            release.push(releases[i]);
                        }
                    }
                }
                response.
                    m({
                        id:id,
                        doc:doc,
                        release:release
                    }).
                    render();
            }else{
                //list all docs
                response.
                    m({docs:docs}).
                    render();
            }
        }
    });
    
})(jQuery, Claypool.Server, EnvJS.Services, EnvJS.Models);
