/**
 * @author thatcher
 */
(function($, $$, $S){
    
    var log,
        docs,
        releases;
    
    $S.Releases = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Services.Releases');
        docs = $.$('#docsModel').get();
        releases = $.$('#releasesModel').get(); 
    };
    
    $.extend($S.Releases.prototype, new $$.Servlet(), {
        handleGet: function(request, response){
            log.debug('Serving page.');
            var id = response.params('id'),
                doc, 
                release,
                i;
            if(id){
                //find the releases based on the id passed
                for(i=0;i<releases.length;i++){
                    if(releases[i].id == id){
                        release = releases[i]; 
                        break;
                    }
                }
                //find the doc for this release
                if(release){
                    for(i=0;i<docs.length;i++){
                        if(docs[i].id == release.doc){
                            doc = docs[i];
                            break;
                        }
                    }
                }
                response.
                    m({
                        id:id,
                        doc:doc||{},
                        release:release
                    }).
                    render();
            }else{
                //list all docs
                response.
                    m({releases:releases}).
                    render();
            }
        }
    });
    
})(jQuery, Claypool.Server, EnvJS.Services);
