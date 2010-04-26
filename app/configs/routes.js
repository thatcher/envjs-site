/**
 * @author thatcher
 */
(function($){

   $.routes({
        "hijax:server" : [{
            id:"#envjs-site-routes",
            hijaxMap:
                [{ urls :"/rest/?$",                                            controller:"#restService"},
                 { urls :"/rest/<:domain([a-z]+):>/?$",                           controller:"#restService"},
                 { urls :"/rest/<:domain([a-z]+):>/<:id(.*):>$",                  controller:"#restService"},
                 { urls :"/manage/<:command(.*):>$",                            controller:"#manageService"},
                 { urls :"/admin/|:action|/?$",                                 controller:"#adminService"},
                 { urls :"/admin/|:action|/|:domain|/?$",                       controller:"#adminService"},
                 { urls :"/admin/|:action|/|:domain|/|:id|/?$",                 controller:"#adminService"},
                 { urls :"/docs$",                   controller:"#siteService", action:'docs'},
                 { urls :"/doc/guide/<:id(.*):>$",   controller:"#siteService", action:'guide'},
                 { urls :"/doc/api/<:id(.*):>$",     controller:"#siteService", action:'api'},
                 { urls :"/events$",                 controller:"#siteService", action:'events'},
                 { urls :"/home$",                   controller:"#siteService", action:'home'},
                 { urls :"/news$",                   controller:"#siteService", action:'news'},
                 { urls :"/release/<:id(.*):>$",     controller:"#siteService", action:'release'},
                 { urls :"/releases$",               controller:"#siteService", action:'releases'},
                 { urls :"/support$",                controller:"#siteService", action:'support'}]
           }]   
    });
    
})(jQuery);
