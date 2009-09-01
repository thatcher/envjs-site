<html xml:lang="eng"  dir="ltr" xml:space="default">
    <!-- 
    /**
     * @author thatcher
     */ 
     -->
    <head 	profile="http://a9.com/-/spec/opensearch/1.1/">
		<block id='title'>
			<title>Envjs</title>
		</block>
		{extend('html/meta.js')}
		<block id='meta_extra'>
			<!-- /**
				standard extension point for additional metadata 
			*/ -->
		</block>
        
		{extend('html/stylesheets.js')}
		<block id='stylesheet_extra'>
			<!-- /**
				standard extension point for additional stylesheets 
			*/ -->
		</block>
        
		{extend('html/links.js')}
		<block id='link_extra'>
			<!-- /**
				standard extension point for additional links 
			*/ -->
		</block>
        
		{extend('html/scripts.js')}
		<block id='script_extra'>
			<!-- /**
				standard extension point for additional stylesheets 
			*/ -->
		</block>
    </head>
    <body>
		<!--
		/**
		 * Header
		 */
		-->
		<div id='header' class="container">
			{extend('html/header.js')}
		</div>
		
		<!--
		/**
		 * Main Content
		 */
		-->
        <div id='main' class="container">
			<block id='main'>
				<!-- /**
				   main layout extension point
				*/ -->
			</block>
		</div>
			
			
		<!--
		/**
		 * Footer
		 */
		-->
		<div 	id="footer" 
				class="container">
			<div class="column span-23 last">
				{extend('html/footer.js')}
				<block id='global-footer_extra'>
					<!-- /**
						standard extension point for additional elements 
					*/ -->
				</block>
			</div>
		</div>
		
		<!--
		/**
		 * Analytics
		 */
		-->
		{extend('html/analytics.js')}
    </body>
</html>

