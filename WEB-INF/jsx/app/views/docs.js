/**
 * @author thatcher
 */
(function($,$V){
    
    var log;
    
    $V.Docs = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Views.Docs');
    };
    
    $.extend($V.Docs.prototype, {
        render: function(model){
            log.debug("Rendering html templates "); 
            var page = model.id?'docs':'docs';
            this.write( $.e4x(
                'html/pages/'+page+'.js'+(model.id?'?'+model.id:''), 
                    model, true) );
        }
    });
    
})(jQuery, EnvJS.Views);
