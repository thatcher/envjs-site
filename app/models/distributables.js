/**
 * @author thatcher
 */
(function($, $M){

    $M.Distributables = function(options){
         $.extend(true, this, options,$.model('distributables', {
            $id:{
                not:[null],
                msg:'id must be defined'
            },
            release:{
                references :"#releases"
            },
            label:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'please provide a brief title.'
            },
            url:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'please provide url'
            },
            description:{
                pattern:/.{1,1024}/,
                not:[null],
                msg:'please provide a description'
            },
            hash: {
                pattern:/.{1,1024}/,
                not:[null],
                msg:'please provide a hash'
            },
            deleted:{
                pattern:/^[0-9]{0,32}$/,
                msg:'timestamp when record was removed'
            }
        }));
        log = $.logger('EnvJS.Models.Distributables');
    };
    
    $.extend($M.Distributables.prototype, {
        
        all:function(callback){
            var _this = this,
                data = null;
            this.find({
                async:false,
                select:"new Query('distributables')",
                success:function(results){
                    log.debug('got all distributables' );
                    data = results.data;
                    callback(data);
                },
                error: function(xhr, status, e){
                    log.debug('error getting all distributables');
                    data = [_this.template({
                        $id:'404',
                        description:'error. ('+status+')'
                    })];
                    callback(data);
                }
            });
        },
        forRelease: function(release, callback){
            var _this = this,
                data = null;
            log.debug('getting distributables for release %s', release );
            this.find({
                async: false,
                select:"new Query('distributables').addFilter('release', $EQUAL, '"+release+"')",
                success:function(results){
                    log.debug('got distributables for release %s', release );
                    data = results.data;
                    callback(data);
                },
                error: function(xhr, status, e){
                    log.debug('error getting distributables for release %s', release );
                    data = [_this.template({
                        $id:'404',
                        description:'error. ('+status+')'
                    })];
                    callback(data)
                }
            });
        }
        
    });
    
    
})(jQuery, EnvJS.Models);