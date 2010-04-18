/**
 * @author thatcher
 */

(function($){

   $.routes({
        "hijax:server" : [{
            id:"#site-server-routes",
            hijaxMap:
               [{ urls :"/docs$",                   controller:"#siteService",  action:'docs'},
                { urls :"/doc/guide/<:id(.*):>$",   controller:"#siteService",  action:'guide'},
                { urls :"/doc/api/<:id(.*):>$",     controller:"#siteService",  action:'api'},
                { urls :"/events$",                 controller:"#siteService",  action:'events'},
                { urls :"/home$",                   controller:"#siteService",  action:'home'},
                { urls :"/news$",                   controller:"#siteService",  action:'news'},
                { urls :"/release/<:id(.*):>$",     controller:"#siteService",  action:'release'},
                { urls :"/releases$",               controller:"#siteService",  action:'releases'},
                { urls :"/support$",                controller:"#siteService",  action:'support'}]
           }]   
    });
    
})(jQuery);
