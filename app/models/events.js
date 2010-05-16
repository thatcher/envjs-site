/**
 * @author thatcher
 */
(function($, $M){ 
    
    var data,// the currently cached data
        log;
    
    $M.Events = function(options){
        $.extend(true, this, options, $.model('events', {
            $id:{
                not:[null],
                msg:'please provide an id'
            },
            title:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'please provide a brief title'
            },
            date:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'what is the date of this event'
            },
            location:{
                pattern:/^.{1,256}$/,
                not:[null],
                msg:'where will this event be held?'
            },
            image:{
                pattern:/^.{1,256}$/,
                not:[null],
                msg:'you may provide an image ( absolute )'
            },
            description:{
                pattern:/.{1,1024}/,
                not:[null],
                msg:'description is not required but must be a valid string, upto\
                    1024 characters long'
            },
            deleted:{
                pattern:/^[0-9]{1,32}$/,
                msg:'timestamp when record was removed'
            }
        }));
        data = [];
        log = $.logger('EnvJS.Models.Events');
    };
    
    $.extend( $M.Events.prototype, {
        all:function(callback){
            var _this = this;
            this.find({
                async:false,
                select:"new Query('events')",
                success:function(results){
                    log.debug('loaded all %s events', results.data.length );
                    callback(results.data.reverse());
                },
                error: function(xhr, status, e){
                    log.error('failed to load all events.', e);
                    callback([_this.template({$id:'404'})]);
                }
            });
        },
        current:function(callback){
            var _this = this;
            this.find({
                async:false,
                select:"new Query('events').addFilter('deleted', $EQUAL, '')",
                success:function(results){
                    var data = [];
                    $(results.data).each(function(){
                        if(this.date.match(/2010/))
                            data.push(this)
                    });
                    log.debug('loaded all current %s events', data.length );
                    callback(data.reverse());
                },
                error: function(xhr, status, e){
                    log.error('failed to load all events.', e);
                    callback([_this.template({$id:'404'})]);
                }
            });
        },
        recent:function(count, callback){
            this.current(function(results){
                callback(results.slice(0,
                    results.length > (count-1) ? count : results.length));
            });
        },
        template: function(options){
            return $.extend(true, {
                $id:            'envjs'+$.uuid(),
                title:          $.title(3, false),
                date:           new Date()+'',
                location:       $.words(5, false),
                description:    $.sentence(),
                image:          'error/thumb.jpg',
                deleted:        ''
            }, options );
        }
    });
    
    
})(jQuery, EnvJS.Models);
 