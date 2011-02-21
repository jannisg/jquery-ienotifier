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
					
					var snippet = 	"<div id='_ieNotifier'>" +
										
									"</div>";
					
					$(snippet)
						.prependTo('body')
						.hide()
						.fadeIn(400, _reveal );
					
					function _reveal() {
						var display =	"<div id='_notice'>" +
											"<h1> You're browser is outdated. Please choose one of the options below and update. </h1>" +
											"<ul id='_browserChoices'>" +
												"<li> <a href='#'>Mozilla Firefox</a> </li>" +
												"<li> <a href='#'>Google Chrome</a> </li>" +
												"<li> <a href='#'>Apple Safari</a> </li>" +
												"<li> <a href='#'>Opera</a> </li>" +
												"<li> <a href='#'>Microsort Internet Explorer 8</a> </li>" +
											"</ul>" +
										"</div>";
						
						$(display)
							.prependTo('#_ieNotifier')
							.hide()
							.fadeIn(350);
						
					}
					
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