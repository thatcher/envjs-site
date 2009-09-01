/**
 * @author thatcher
 */
(function($,$V){
    
    var log;
    
    $V.Releases = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Views.Releases');
    };
    
    $.extend($V.Releases.prototype, {
        render: function(model){
            log.debug("Rendering html templates "); 
            var page = model.id?'release':'releases';
            this.write( $.e4x(
                'html/pages/'+page+'.js'+(model.id?'?'+model.id:''), 
                    model, true) );
        }
    });
    
})(jQuery, EnvJS.Views);
