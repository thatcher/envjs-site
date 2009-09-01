/**
 * Records of Existence @VERSION - 
 *
 * Copyright (c) 2008-2009 Records of Existence
 * @author thatcher
 */
var EnvJS = {
	Models:{},
	Views:{},
	Controllers:{},
	Services:{},
    Metadata:{}
};
(function($){
 	
   $.config("ioc", [
        {scan:"EnvJS.Models",    factory:$.mvc_scanner}, 
        {scan:"EnvJS.Views",     factory:$.mvc_scanner},
        {scan:"EnvJS.Services",  factory:$.mvc_scanner}
    ]);
    
})(jQuery);
    
