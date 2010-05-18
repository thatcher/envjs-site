/**
 *
 * Copyright (c) 2008-2009 ClaypoolJS
 *
 */
(function($){

    var log;
    
    $.filters([{

        id        : "#requestResponseParamFilter",
        target    : "EnvJS.Services.*",
        before    : "([a-z]*)",
        advice    : function(event, response){
            log = log||$.logger('EnvJS.Filters');
            log.debug( 'Adding normalized event state to event scoped model' );
            var params = event.params( 'parameters' );
            
            event.
                m({admin:('admin' in params)?true:false }).
                m(event.params());
        }
        
    },{

        id        : "#contentNegotiationFilter",
        target    : "EnvJS.Views.*",
        around    : "(write)",
        advice    : function(invocation){

            var model = invocation.arguments[0],
                event = invocation.arguments[1],
                view = invocation.object;
                
            log = log||$.logger('EnvJS.Filters');
            log.debug('Intercepted call to render');
            switch( model.parameters.fo ){
                case 'json':
                    var newline = "\n";
                    event.response.headers['Content-Type']='text/plain; charset=utf-8';
                    return  $.json(model, null, '    ');
                    break;//do not proceed
                case 'xml':
                    event.response.headers['Content-Type']='application/xml; charset=utf-8';
                    return $.x({x:model});
                    break;//do not proceed
                default:
                    if('template' in model)
                        model.template += '?'+new Date().getTime();
                    return invocation.proceed();
            }    
        }
    }]);

})(jQuery);

