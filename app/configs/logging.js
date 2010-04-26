/**
 * @author thatcher
 */

(function($){ 
    
   $.logging([
        { category:"EnvJS",                         level:"INFO" },
        { category:"EnvJS.Models",                  level:"INFO" },
        { category:"EnvJS.Views",                   level:"INFO" },
        { category:"EnvJS.Controllers",             level:"INFO" },
        { category:"EnvJS.Services",                level:"INFO" },
        { category:"Claypool.Models",               level:"DEBUG" },
        { category:"Claypool.Router",               level:"DEBUG" },
        { category:"Claypool.MVC",                  level:"WARN" },
        { category:"Claypool",                      level:"WARN" },
        { category:"jQuery",                        level:"DEBUG" },
        { category:"root",                          level:"WARN" }
    ]);     
	
    jQuery.tmpl.debug = true;
    
})(jQuery);