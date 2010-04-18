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
        advice    : function(event){
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
        around    : "(render)",
        advice    : function(invocation){

            var model = invocation.arguments[0],
                view = invocation.object;
                
            log = log||$.logger('EnvJS.Filters');
            log.debug('Intercepted call to render');
                
            switch( model.parameters.fo ){

                case 'json':
                    model.headers['Content-Type']='text/javascript';
                    return view.write($.json(model, null, '\t'));
                    break;//do not proceed
                case 'xml':
                    model.headers['Content-Type']='application/xml';
                    return view.write($.x({x:model}));
                    break;//do not proceed
                default:
                    if('template' in model)
                        model.template += '?'+new Date().getTime();
                    return invocation.proceed();
            
            }    
        }
    }]);

})(jQuery);
    
