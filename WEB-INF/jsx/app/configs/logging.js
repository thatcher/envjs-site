/**
 * @author thatcher
 */

(function($){ 
    
   $.config("logging",[
        { category:"EnvJS",               level:"INFO" },
        { category:"EnvJS.Models",        level:"INFO" },
        { category:"EnvJS.Views",         level:"INFO" },
        { category:"EnvJS.Controllers",   level:"INFO" },
        { category:"EnvJS.Service",       level:"INFO" },
        { category:"Claypool.Router",   level:"WARN" },
        { category:"Claypool.MVC",      level:"WARN" },
        { category:"root",              level:"WARN" }
    ]);     
	
})(jQuery);