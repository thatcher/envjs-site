/**
 * @author thatcher
 */
(function($, $M){ 
    
    var data,
        log;
        
    $M.News = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Models.News');
    };
    
    $.extend($M.News.prototype,{
        get: function(){
            var url = $.env('data')+'news/metadata.json';
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
            var news = this.get(); 
            return  news.slice(0,news.length>2?3:news.length);
        }
    });
    
})(jQuery, EnvJS.Models);
 