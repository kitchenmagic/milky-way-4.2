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
	var 	leftPanel,
		rightPanel;

	$( 'body > div' ).wrap( '<div class="off-canvas-wrap" data-offcanvas></div>' );
	$( 'body > div > div' ).addClass( 'inner-wrap' );

	leftPanel = $('#km-panel-left').detach();
	rightPanel = $('#km-panel-right').detach();

	leftPanel.prependTo('.off-canvas-wrap > .inner-wrap');
	rightPanel.prependTo('.off-canvas-wrap > .inner-wrap');

	//iOS Fix
	$('.left-off-canvas-toggle').on('click',function(){
		$('.left-off-canvas-wrap').foundation('offcanvas', 'show', 'move-right');
      });
	$('.right-off-canvas-toggle').on('click',function(){
		$('.right-off-canvas-wrap').foundation('offcanvas', 'show', 'move-left');
      });

})();

$(document).foundation('offcanvas', 'reflow');

//Smooth Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*
$(document)
.on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
  $('html').css('overflow', 'hidden');
})
.on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
  $('html').css('overflow', 'auto');
})
*/
