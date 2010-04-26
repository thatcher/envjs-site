/**
 * @author thatcher
 */
(function($, $M){ 
    
    var log;
    
    $M.News = function(options){
        $.extend(true, this, options, $.model('news', {
            $id:{
                not:[null],
                msg:'id must be defined'
            },
            title:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'please provide a brief title.'
            },
            date:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'please provide a date'
            },
            description:{
                pattern:/.{1,1024}/,
                not:[null],
                msg:'please provide a description'
            },
            deleted:{
                pattern:/^[0-9]{0,32}$/,
                msg:'timestamp when record was removed'
            }
        }));
        log = $.logger('EnvJS.Models.News');
    };
    
    $.extend( $M.News.prototype, {
        all:function(callback){
            var _this = this,
                data = null;
            this.find({
                async:false,
                select:"new Query('news')",
                success:function(results){
                    data = results.data.reverse();
                    log.debug('loaded all %s news', data.length );
                    callback(data);
                },
                error: function(){
                    log.error('failed to load all news.');
                    data = [_this.template({
                        $id:        '404',
                        title:      'Not Found'
                    })];
                    callback(data);
                }
            });
        },
        current:function(callback){
            var _this = this,
                data = null;
            this.find({
                async:false,
                select:"new Query('news').addFilter('deleted', $EQUAL, '')",
                success:function(results){
                    data = results.data.reverse();
                    log.debug('loaded all %s news', data.length );
                    callback(data);
                },
                error: function(){
                    log.error('failed to load all news.');
                    data = [_this.template({
                        $id:        '404',
                        title:      'Not Found'
                    })];
                    callback(data);
                }
            });
        },
        recent:function(count, success){
            this.current(function(results){
                success(results.slice(0,
                    results.length > (count-1) ? count : results.length));
            });
        },
        template: function(options){
            return $.extend({
                $id:        $.uuid(),
                title:      $.title(3),
                date:       new Date()+'',
                description:$.paragraphs(2, false),
                deleted:''
            }, options);
        }
    });
    
})(jQuery, EnvJS.Models);
 