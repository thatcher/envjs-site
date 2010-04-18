/**
 * @author thatcher
 */
(function($, $M){ 
    
    var data,// the data
        log;
    
    $M.Docs = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Models.Docs');
    };
    
    $.extend($M.Docs.prototype,{
        get: function(){
            var url = $.env('data')+'docs/metadata.json';
            if(!data){
                $.ajax({
                    type:'GET',
                    url:url,
                    dataType:'text',
                    async:false,
                    success: function(json){
                        log.debug('Loaded data %s',json); 
                        data = $.json2js(json)._;
                    },
                    error:function(xhr, status, e){
                        log.error('failed to load data %s', url).
                            exception(e);
                    }
                });
            }
            return data;
        },
        forVersion: function(type, id){
            var docs = this.get(), 
                i;
             //find the docs based on the id passed
            for(i=0;i<docs.length;i++){
                if((docs[i].id+docs[i].version) == type+id){
                    return  docs[i];
                }
            }
            log.warn('couldnt find doc for version %s/%s', type, id);
            return null;
        }
    });
    
})(jQuery, EnvJS.Models);
 