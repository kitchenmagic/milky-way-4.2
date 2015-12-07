// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

//$(document).foundation();

$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'move', 
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : true
  }
});

(function(){
	var leftPanel,
		rightPanel;

	$( 'body > div' ).wrap( '<div class="off-canvas-wrap" data-offcanvas></div>' );
	$( 'body > div > div' ).addClass( 'inner-wrap' );

	leftPanel = $('#km-panel-left').detach();
	rightPanel = $('#km-panel-right').detach();

	console.log("Left Panel: " + leftPanel);

	leftPanel.prependTo('.off-canvas-wrap > .inner-wrap');
	rightPanel.prependTo('.off-canvas-wrap > .inner-wrap');

	console.log('Just appended');
})();

console.log('About to reflow');
$(document).foundation('offcanvas', 'reflow');

/*
$(document)
.on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
  $('html').css('overflow', 'hidden');
})
.on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
  $('html').css('overflow', 'auto');
})
*/
