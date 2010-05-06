/**
 * @author thatcher
 */
(function($,  $S){
    
    var log;
    
    $S.Admin = function(options){
        log = $.logger('EnvJS.Services.Admin');
        $.extend(true, this, options);
    };
    
    $.extend($S.Admin.prototype,{
        
        handle: function(event, response){
            var action  = event.params('action'),
                domain  = event.params('domain'),
                id      = event.params('id');
            
            log.debug('Action %s | Domain %s | Id %s', action, domain, id);
            //allows us to provide generic handlers and more specific handlers
            //based on how much information was passed.
            log.debug('%s/%s/ isFunction? %s', action, domain, $.isFunction(admin[action+'/'+domain+'/']));
            if($.isFunction(admin[action+'/'+domain+'/'+id+'/'])){
                admin[action+'/'+domain+'/'+id+'/'](event);
            }else if($.isFunction(admin[action+'/'+domain+'/'])){
                admin[action+'/'+domain+'/'](id, event);
            }else if($.isFunction(admin[action+'/'])){
                admin[action+'/'](domain, id, event);
            }
            
            log.debug(' %s / %s / %s : Completed.', action, domain, id);
        }
    });
    
    var admin = {
        'save/': function(domain, id, event){
            var Model = $.$('#'+domain+'Model'),
                instance = Model.serialize(event.params('parameters')), 
                prop, parts;
            log.debug('deserializing post body %s', event.request.body);
            //figure out if there are mutli valued arrays
            for(prop in event.params('parameters')){
                parts = prop.split('.');
                if(parts.length == 2){
                    log.debug('deserializing multi-valued form elements %s', prop);
                    if(!instance[parts[0]]){
                        instance[parts[0]] = [];
                    }
                    log.debug('%s[%s] = %s',parts[0], parts[1], event.params('parameters')[prop]);
                    instance[parts[0]][parts[1]] = event.params('parameters')[prop];
                }
            }
            log.debug('%s', $.js2json(instance));
            Model.save({
                async:  false,
                id:     id,
                data:   instance,
                success: function(result){
                    log.info('Saved %s/%s', domain, id);
                    event.response.headers =  {
                        status:   302,
                        "Location": event.params('headers').Referer
                    };
                    return;
                },
                error: function(xhr, status, e){
                    log.error('failed to save %s/%s', domain, id).
                        exception(e);
                    throw new Error(e);
                }
            });
        },
        
        'add/': function(domain, id, event){
            var Model = $.$('#'+domain+'Model');
            
            Model.get({
                async:false,
                success: function(results){
                    var count = results.data.length+1,
                        newId,
                        params = event.request.parameters;
                    if(count<10){
                        newId = 'envjs00'+count;
                    }else if (count<100){
                        newId = 'envjs0'+count;
                    }else{
                        newId = 'envjs'+count;
                    }
                    $.$('#'+domain+'Model').save({
                        async:false,
                        id:newId,
                        data:$.$('#'+domain+'Model').template($.extend({$id:newId},params)),
                        success: function(){
                            log.info('Added %s/%s', domain, newId);
                            event.response.headers =  {
                                status:   302,
                                "Location": event.params('headers').Referer
                            };
                            return;
                        },
                        error: function(xhr, status, e){
                            log.error('failed to add %s/%s', domain, id).
                                exception(e);
                            throw new Error(e);
                        }
                    });
                },
                error: function(xhr, status, e){
                    log.error('failed to add %s/%s', domain, id).
                        exception(e);
                    throw new Error(e);
                }
            });
        },
        
        'restore/': function(domain, id, event){
            var Model = $.$('#'+domain+'Model'),
                instance;
            
            Model.get({
                id: id,
                async:false,
                success: function(results){
                    instance = results.data[0];
                    instance.deleted = '';
                    log.info('Marking Undeleted %s/%s', domain, id);
                    Model.save({
                        id:id,
                        data:instance,
                        async:false,
                        success: function(){
                            log.info('successfully marked undeleted %s %s', domain, id);
                        },
                        error: function(){
                            log.warn('failed to mark undeleted %s %s', domain, id)
                        }
                    });
                    event.response.headers =  {
                        status:   302,
                        "Location": event.params('headers').Referer
                    };
                    return;
                },
                error: function(xhr, status, e){
                    log.error('failed to restore %s/%s', domain, id).
                        exception(e);
                    throw new Error(e);
                }
            });
        },
        
        'remove/': function(domain, id, event){
            var Model = $.$('#'+domain+'Model'),
                instance;
            
            Model.get({
                id: id,
                async:false,
                success: function(results){
                    instance = results.data[0];
                    instance.deleted = new Date().getTime()+'';
                    log.info('Marking Deleted %s/%s', domain, id);
                    Model.save({
                        id:id,
                        data:instance,
                        async:false,
                        success: function(){
                            log.info('successfully marked deleted %s %s', domain, id);
                        },
                        error: function(){
                            log.warn('failed to mark deleted %s %s', domain, id)
                        }
                    });
                    event.response.headers =  {
                        status:   302,
                        "Location": event.params('headers').Referer
                    };
                    return;
                },
                error: function(xhr, status, e){
                    log.error('failed to restore %s/%s', domain, id).
                        exception(e);
                    throw new Error(e);
                }
            });
        },
        
        'add/examples/' : function(id, event){
            var doc     = event.params('parameters').doc,
                id      = event.params('parameters').id,
                model   = $.$('#'+doc+'Model');
            log.info('adding example to %s ', doc);
            model.get({
                id: id,
                async:false,
                success: function(results){
                    instance = results.data[0];
                    if(instance.examples == ""){
                        instance.examples = [];
                    }
                    instance.examples.push('please provide example '+(instance.examples.length)+' here');
                    log.info('Added template example ');
                    model.save({
                        id:id,
                        data:instance,
                        async:false,
                        success: function(){
                            log.info('successfully saved example %s', id);
                        },
                        error: function(){
                            log.warn('failed to save exammple %s', id);
                        }
                    });
                    event.response.headers =  {
                        status:   302,
                        "Location": event.params('headers').Referer
                    };
                    return;
                },
                error: function(xhr, status, e){
                    log.error('failed to retrieve id %s', id).
                        exception(e);
                    throw new Error(e);
                }
            });
        },
        
        'remove/examples/' : function(id, event){
            var doc     = event.params('parameters').doc,
                id      = event.params('parameters').id,
                index   = event.params('parameters').index,
                model   = $.$('#'+doc+'Model');
            log.info('removing %s examples %s for %s', doc, index, id);
            model.get({
                id: id,
                async:false,
                success: function(results){
                    instance = results.data[0];
                    instance.examples.splice(Number(index), 1);
                    if(instance.examples.length === 0){
                        instance.examples = "";
                    }
                    log.info('removing example %s', $.js2json(instance));
                    model.save({
                        id:id,
                        data:instance,
                        async:false,
                        success: function(){
                            log.info('successfully removed example %s', index);
                        },
                        error: function(){
                            log.warn('failed to remove example %s', index);
                        }
                    });
                    event.response.headers =  {
                        status:   302,
                        "Location": event.params('headers').Referer
                    };
                    return;
                },
                error: function(xhr, status, e){
                    log.error('failed to remove example %s', id).
                        exception(e);
                    throw new Error(e);
                }
            });
        }
    };
    
})(jQuery, EnvJS.Services );
