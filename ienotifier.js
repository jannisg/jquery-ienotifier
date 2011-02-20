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
					
					var snippet = 	"<div id='ieNotifier'>" +
										
									"</div>";
					
					$(snippet)
						.prependTo('body')
						.hide()
						.css({ // temporary css styles until moved into a proper css file
							'width':'100%',
							'height':'100%',
							'background-color':'#cc0000',
							'position':'absolute',
							'top':0,
							'left':0
						})
						.fadeIn(800);
					
				},
				// do not interfer with site operation but do show a toolbar-esque warning at the top of the page
				warning : function() {
					console.log('Warning…');
				}
			};

			version="6"; // test only
			var browser = 'ie'+version;
			
			if ( run[o[browser]] !== undefined ) { run[o[browser]](); }
			
    	};

		// defaults
		$.ieNotifier.defaults = {
			ie6 : 'block',
			ie7 : 'none',
			ie8 : 'none'
		};
	
})(jQuery);