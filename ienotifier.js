(function($){

 		$.ieNotifier = function( options ) {

			var options = $.extend( {}, $.ieNotifier.defaults , options );
			var o = options; // shortcut
			
			var ie = $.browser.msie;
			var version = parseInt( $.browser.version );
			
			var run = { // store the actions to trigger
				
				// block complete use of the website and show a complete overlay with update instructions
				block : function() {
					console.log('Blocking…');
				},
				// do not interfer with site operation but do show a toolbar-esque warning at the top of the page
				warning : function() {
					console.log('Warning…');
				}
			};
			version="7"; // test only
			var browser = 'ie'+version;
			console.log( o[browser] );
			console.log( $.inArray( o[browser] , run ) );
			
			if ( $.inArray( o[browser] , run ) !== -1 ) { run[o[browser]](); }
			
    	};

		// defaults
		$.ieNotifier.defaults = {
			ie6 : 'block',
			ie7 : 'none',
			ie8 : 'none'
		};
	
})(jQuery);