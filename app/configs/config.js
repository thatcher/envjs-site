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
	Services:{}
};
(function($){
 	
    $.scan([
        "EnvJS.Models", 
        "EnvJS.Views", 
        "EnvJS.Services",
        "GAE.Services"
    ]);
    
})(jQuery);
    
