/**
 * @author thatcher
 */
(function($){

	//----------------------------------------------------------------//
	//  -   ENVIRONMENTAL CONFIGURATION   -
	//________________________________________________________________//
	$.env({
	    defaults:{
            root:'/',
			templates:'http://localhost:8080/app/templates/',
            data:'data/',
            db:'jQuery.gdb',
            dbclient:'direct',
            dbconnection:{'default':{

            }}
	    },
	    //------------------------------------------------------------//
	    //  -   APPENGINE CONFIGURATION   -
	    //____________________________________________________________//
	    appengine:{
	        server:{
	            templates:'http://4.latest.env-js.appspot.com/app/templates/',
	            data:'http://4.latest.env-js.appspot.com/data/'
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
    
