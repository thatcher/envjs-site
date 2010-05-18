/**
 * @author thatcher
 */
(function($, $V){
    
    var log;
    
    $V.Site = function(options){
        $.extend(true, this, options);
        log = $.logger('EnvJS.Views.Site');
    };
    
    $.extend($V.Site.prototype, {
        write: function(model){
            log.info("Rendering html template %s ", model.template);
            var template = model.template,
                result,
                _this = this;
            $.render({
                async:false,
                url: template,
                templateData: model,
                success: function(rendered){
                    result = rendered;
                    log.info("Finsihed rendering html template %s ", model.template);
                },
                error: function(xhr, status, e){
                    log.error('failed to render : %s ', template).
                        exception(e);
                    //_this.write('status: '+status + '\n' + xhr.responseText + '\n'+ e);
                    throw('Error Rendering template '+ template);
                }
            });
            return result;
        }
    });
    
    $.tmpl.filters.fn.extend({
        where: function(name, value){
            return this.map(function(){
                if(name in this && this[name] === value){
                    return this;
                }
            });
        }
    });
    
})(jQuery, EnvJS.Views);
