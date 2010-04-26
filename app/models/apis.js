/**
 * @author thatcher
 */
(function($, $M){ 
    
    var log;
    
    $M.Apis = function(options){
        $.extend(true, this, options, $.model('apis', {
            $id:{
                not:[null],
                msg:'$id must be defined'
            },
            description:{
                not:[null],
                msg:'please provide a description'
            },
            deprecated:{
                msg:'last version for which this entry was valid'
            },
            deleted:{
                pattern:/^[0-9]{1,32}$/,
                msg:'timestamp when record was removed'
            },
            example:{
                not:[null],
                msg:'please provide an example'
            },
            name:{
                pattern:/^[\w]{1,64}$/,
                not:[null],
                msg:'please provide a short name'
            },
            page:{
                pattern:/^[\w]{1,64}$/,
                not:[null],
                msg:'please provide a name this entry will belond to.'
            }
        }));
        log = $.logger('EnvJS.Models.Apis');
    };
    
    $.extend( $M.Apis.prototype, {
        all:function(callback){
            var _this = this;
            this.find({
                async:false,
                select:"new Query('apis')",
                success:function(results){
                    log.debug('loaded all %s apis', results.data.length );
                    callback(results.data);
                },
                error: function(xhr, status, e){
                    log.error('failed to load all apis. (%s)', status).
                        exception(e);
                    callback([_this.template({
                        $id:'404',
                        description:'failed to load apis. ('+status+')'
                    })]);
                }
            });
        },
        currentPages:function(callback){
            var _this = this;
            this.find({
                async:false,
                select:"new Query('apis').addFilter('deleted', $EQUAL, '')",
                data: ['$id', 'page', 'name'],
                success:function(results){
                    log.debug('loaded all %s guides', results.data.length );
                    callback(results.data);
                },
                error: function(xhr, status, e){
                    log.error('failed to load all guides. (%s)', status).
                        exception(e);
                    callback([_this.template({
                        $id:'404',
                        description:'failed to load guides. ('+status+')'
                    })]);
                }
            });
        },
        current:function(callback){
            var _this = this;
            this.find({
                async:false,
                select:"new Query('apis').addFilter('deleted', $EQUAL, '')",
                success:function(results){
                    log.debug('loaded all %s apis', results.data.length );
                    callback(results.data);
                },
                error: function(xhr, status, e){
                    log.error('failed to load all apis. (%s)', status).
                        exception(e);
                    callback([_this.template({
                        $id:'404',
                        description:'failed to load apis. ('+status+')'
                    })]);
                }
            });
        },
        forVersion: function(version , callback){
            var _this = this;
            log.debug('getting apis for version %s', version );
            this.find({
                async: false,
                select:"new Query('apis').addFilter('version', $EQUAL, '"+version+"')",
                success: function(results){
                    log.debug('found apis for %s', version );
                    callback(results.data);
                },
                error:function(xhr, status, e){
                    log.error('failed to find api for version %s', version);
                    callback([_this.template({
                        $id:'404',
                        version: version,
                        description:'failed to load apis for version'+version
                    })]);
                }
            });
        },
        template: function(options){
            log.debug('generating template api entry');
            return $.extend({
                $id:            '500',
                version:        '0.0.0',
                name:           $.title(2, false),
                description:    $.paragraphs(1, false),
                example:        $.paragraphs(2, false),
                deprecated:     false,
                deleted:        ''
            }, options );
        }
    });
    
})(jQuery, EnvJS.Models);