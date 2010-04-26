/**
 * @author thatcher
 */
(function($, $M){

    $M.Releases = function(options){
         $.extend(true, this, options,$.model('releases', {
            $id:{
                not:[null],
                msg:'id must be defined'
            },
            created:{
                pattern:/^[0-9]{0,32}$/,
                not:[null],
                msg:'timestamp when record was created'
            },
            description:{
                pattern:/.{1,1024}/,
                not:[null],
                msg:'please provide a description'
            },
            deleted:{
                pattern:/^[0-9]{0,32}$/,
                msg:'timestamp when record was removed'
            },
            notes:{
                pattern:/.{1,1024}/,
                msg:'additional info to display regarding releases'
            },
            zip:{
                pattern:/^.{1,512}$/,
                not:[null],
                msg:'please provide a url to the source tar.'
            },
            readme:{
                pattern:/^.{1,512}$/,
                not:[null],
                msg:'please provide a url to the readme.'
            },
            title:{
                pattern:/^.{1,64}$/,
                not:[null],
                msg:'please provide a brief title.'
            },
            zip:{
                pattern:/^.{1,512}$/,
                not:[null],
                msg:'please provide a url to the source zip.'
            }
        }));
        log = $.logger('EnvJS.Models.Releases');
    };
    
    $.extend($M.Releases.prototype, {

        all: function(callback){
            var _this = this,
                data = null;
            this.find({
                async:false,
                select:"new Query('releases')",
                success:function(results){
                    log.debug('got all releases' );
                    data = results.data;
                    callback(data);
                },
                error: function(xhr, status, e){
                    log.debug('error getting all releases');
                    data = [_this.template({
                        $id:'404',
                        description:'error. ('+status+')'
                    })];
                    callback(data);
                }
            });
        },
        forId: function(id, callback){
            var _this = this,
                data = null;
            log.debug('getting release for id %s', id );
            this.get({
                async: false,
                id:id,
                success:function(results){
                    log.debug('got release for id %s', id );
                    data = results.data[0];
                    callback(data)
                },
                error: function(xhr, status, e){
                    log.debug('error getting release for id %s', id );
                    data = _this.template({
                        $id:'404',
                        description:'error. ('+status+')'
                    });
                    callback(data)
                }
            });
        },
        current:function(callback){
            var _this = this;
            this.find({
                async:false,
                select:"new Query('releases').addFilter('deleted', $EQUAL, '')",
                success:function(results){
                    log.debug('loaded all %s', results.data.length );
                    callback(results.data.reverse());
                },
                error: function(xhr, status, e){
                    log.error('failed to load all.', e);
                    callback([_this.template({$id:'404'})]);
                }
            });
        },
        currentVersions:function(callback){
            var _this = this;
            this.find({
                async:false,
                data: ['$id', 'name'],
                select:"new Query('releases').addFilter('deleted', $EQUAL, '')",
                success:function(results){
                    log.debug('loaded all %s', results.data.length );
                    callback(results.data.reverse());
                },
                error: function(xhr, status, e){
                    log.error('failed to load all.', e);
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
            return $.extend({
                $id:            $.uuid(),
                description:    "description",
                deleted:        "",
                notes:          ["notes"],
                zip:            "zip",
                tar:            "tar"
            },options);
        }
    });

})(jQuery, EnvJS.Models);