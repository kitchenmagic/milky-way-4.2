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

	//Left and Right Panels
	var   leftPanel,
				rightPanel;

	$( 'body > div' ).wrap( '<div class="off-canvas-wrap" data-offcanvas></div>' );
	$( 'body > div > div' ).addClass( 'inner-wrap' ).append('<a class="exit-off-canvas"></a>');

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




$(document).ajaxComplete(function(){
	formCustomDatePicker();
	formValidationFix();	
});




function formCustomDatePicker(){

	var disableddates = [
				"12-24-2015",
				"12-25-2015", 
				"12-31-2015"
				];

	var daysOut = 3;


	//Calculation for days in miliseconds
	var daysOutInMis = daysOut * 86400000; 

	function DisableSpecificDates(date) {

		var m = date.getMonth(),
			d = date.getDate(),
			y = date.getFullYear(),
			t = $.now();

		// First convert the date in to the mm-dd-yyyy format 
		// Take note that we will increment the month count by 1 
		var currentdate = (m + 1) + '-' + d + '-' + y ;

		if( date <= t+daysOutInMis ){
			return [false];
		}

		// In case the date is not present in disabled array, we will now check if it is a weekend. 
		// We will use the noWeekends function
		var weekenddate = $.datepicker.noWeekends(date);
		
		// We will now check if the date belongs to disableddates array 
		for (var i = 0; i < disableddates.length; i++) {

			// Now check if the current date is in disabled dates array. 
			if ($.inArray(currentdate, disableddates) != -1 ) {
				return [false];
			} 
		}

		return weekenddate; 
	 
	}

	
	$("input[id*='appointment_date']").datepicker({
		beforeShowDay: DisableSpecificDates,
		constrainInput: true
	}).attr('readonly','readonly');
}




//VALIDATES CHECK BOXES AND RADIO BUTTONS
function formValidationFix(){
	
	var count = 0;
	
	$('.hs-form-field').on('change DOMNodeInserted', function(){
		
		$(this).find('.hs-error-msgs').each(function(){
			count++;
			console.log('Found: ' + count);
		});
	});

	
 /*
var errorClass = "error";

	$('.hs-form-field').on('change', function(){

		var checkboxField = $(this).prev().find('.hs-form-booleancheckbox');
		var checkbox = checkboxField.find('input');

			if( checkbox.prop('checked') ){
				console.log("true");
				checkboxField.find('label').removeClass('error');
			}else{
				console.log("FALSE");
				checkboxField.find('label').addClass('error');
			}
			//checkboxField.find('label').addClass('error');
			//checkbox.on('change', errorControl(checkbox));
	});


check if field has an error message and alert the user
When the user corrects the problem, remove the alert


When dom element is changed, check if error message still exists
  if yes: alert the user
  if no: remove the alert


	$('.hs-error-msgs').prev().find('.input-lists input').each(function(item){
		item.on('change', errorControl(item) );
		console.log('each');
	});

	function errorControl(obj){
		console.log('Error Control: ' + obj);

		if(obj.prop('checked')){
			console.log('TRUE');
			obj.closest('label').removeClass(errorClass);
		}else{
			console.log('FALSE');
			obj.closest('label').addClass(errorClass);
		}
	};
	*/

}
