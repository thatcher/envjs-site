/**
 * @author thatcher
 */
(function($, $M){
    
    var data,
        log;
    
    $M.Releases = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Models.Releases');
    };
    
    $.extend($M.Releases.prototype,{
        get: function(id){
            var url = $.env('data')+'releases/metadata.json',
                i;
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
                        log.error('failed to load data %s',url).
                            exception(e);
                    }
                });
            }
            
            return data;
        },
        forId: function(id){
            var releases = this.get(), i;
            for(i=0; i<data.length;i++){
                if(id == data[i].id){
                    return data[i];
                }
            }
            log.warn('couldnt find release for id %s', id);
            return null;
        },
        recent: function(){
            var releases = this.get(); 
            return  releases.slice(0,releases.length>1?2:1);
        }
    });
    
})(jQuery, EnvJS.Models);