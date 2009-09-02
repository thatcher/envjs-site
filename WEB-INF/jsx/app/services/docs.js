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
                    if(docs[i].id+'-'+docs[i].version == id){
                        doc = docs[i];
						log.debug('found doc %s', id);
                        break;
                    }
                }
                response.
                    m({
                        id:id,
                        doc:doc,
                        releases:releases
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
