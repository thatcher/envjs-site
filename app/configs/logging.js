/**
 * @author thatcher
 */

(function($){ 
    
   $.logging([
        { category:"EnvJS",                         level:"INFO" },
        { category:"EnvJS.Models",                  level:"INFO" },
        { category:"EnvJS.Views",                   level:"INFO" },
        { category:"EnvJS.Controllers",             level:"INFO" },
        { category:"EnvJS.Services",                level:"DEBUG" },
        { category:"Claypool.Router",               level:"WARN" },
        { category:"Claypool.MVC",                  level:"WARN" },
        { category:"root",                          level:"WARN" }
    ]);     
	
    jQuery.tmpl.debug = false;
    
})(jQuery);