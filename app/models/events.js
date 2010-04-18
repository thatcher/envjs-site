/**
 * @author thatcher
 */
(function($, $M){ 
    
    var data,
        log;
    
    $M.Events = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Models.Events');
    };
    
    $.extend($M.Events.prototype,{
        get: function(){
            var url = $.env('data')+'events/metadata.json';
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
        recent: function(){
            var events = this.get(); 
            return  events.slice(0,events.length>2?3:events.length);
        }
    });
    
})(jQuery, EnvJS.Models);
 