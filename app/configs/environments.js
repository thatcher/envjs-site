/**
 * @author thatcher
 */
(function($){

	//----------------------------------------------------------------//
	//  -   ENVIRONMENTAL CONFIGURATION   -
	//________________________________________________________________//
	$.env({
        automap:{
            'file:///opt':          'dev.server',
            'file:///base':         'appengine.server',
            'http://localhost':     'dev.client',
            'http://www.envjs':     'prod.client'
        },
	    defaults:{
            root: '/',
			templates: 'app/templates/',
            data: 'data/',
            db: 'jQuery.gdb',
            dbclient: 'direct',
            dbconnection: { 'default': {} }
	    },
	    //------------------------------------------------------------//
	    //  -   APPENGINE CONFIGURATION   -
	    //____________________________________________________________//
	    appengine:{
	        server:{
	            templates:'http://3.latest.env-js.appspot.com/app/templates/',
	            data:'http://3.latest.env-js.appspot.com/data/'
	        }
	    },
	    //------------------------------------------------------------//
	    //  -   DEVELOPMENT CONFIGURATION   -
	    //____________________________________________________________//
	    dev:{
	        server:{
	        }
	    },
	    //------------------------------------------------------------//
	    //  -   PRODUCTION CONFIGURATION   -
	    //____________________________________________________________//
	    prod:{
	        server:{
	        }
	    },
	    //------------------------------------------------------------//
	    //  -   TEST CONFIGURATION   -
	    //____________________________________________________________//
	    test:{
	        server:{
	        }
	    }
	}); 
    
})(jQuery);
    
