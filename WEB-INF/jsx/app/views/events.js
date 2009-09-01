/**
 * @author thatcher
 */
(function($,$V){
    
    var log;
    
    $V.Events = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Views.Events');
    };
    
    $.extend($V.Events.prototype, {
        render: function(model){
            log.debug("Rendering html templates "); 
            var e4x = $.e4x("html/pages/events.js", model, true);  
            //log.debug('response: %s', e4x.toXMLString());
            this.write( e4x );
        }
    });
    
})(jQuery, EnvJS.Views);
