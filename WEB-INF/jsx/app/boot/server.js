/**
 * @author thatcher
 */
//  -   BOOT THE APP  -
jQuery.noConflict();
(function($){
    
    //A static logger for any initialization routines we might add here
    var log = $.logger("Env");
    
    //The environments are described in environments.js
    try{
 	   //$.env('defaults', "dev.server"); 
       $.env('defaults', "appengine.server");
 	   
 	   //normally we'd use $.env to set some configuration
 	   //for stuff like jstorm (but this examples uses no models)
 	   //$.jstorm.connections("default", $.env('db'));
 	   //$.jstorm.restservices("default", $.env('rest')); 
       
 	}catch(e){
 	   log.error("Environmental selection is invalid!").exception(e);
 	}
    
    $(document).ready(function(){
        log.info("Initializing Application");
        $.boot(function(){
          //you can do additional initialization here
            log.info("Successfully Initialized Application");
            //preload all application data
            $.$('#docsModel').get();
            $.$('#releasesModel').get();
            $.$('#newsModel').get();
            $.$('#eventsModel').get();
        });
    });    
    
})(jQuery);  
