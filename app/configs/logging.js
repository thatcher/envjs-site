/**
 * @author thatcher
 */

(function($){ 
    
   $.logging([
        { category:"EnvJS",                         level:"WARN" },
        { category:"EnvJS.Models",                  level:"DEBUG" },
        { category:"EnvJS.Views",                   level:"INFO" },
        { category:"EnvJS.Controllers",             level:"INFO" },
        { category:"EnvJS.Services",                level:"DEBUG" },
        { category:"EnvJS.Filters",                 level:"INFO" },
        { category:"Claypool.Models",               level:"INFO" },
        { category:"Claypool.Router",               level:"INFO" },
        { category:"Claypool.MVC",                  level:"WARN" },
        { category:"Claypool",                      level:"WARN" },
        { category:"jQuery",                        level:"INFO" },
        { category:"root",                          level:"ERROR" }
    ]);     
	
    jQuery.tmpl.debug = false;
    
})(jQuery);