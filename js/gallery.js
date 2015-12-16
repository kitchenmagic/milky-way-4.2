//All path references should start with a slash and end without one
//Ex. 	Right Way: '/images' 
//		Wrong Way: '/images/'
(function(){
	var fileExtension = '.jpg',
		root_path = 'http://cdn2.hubspot.net/hubfs/126868/gallery',
		img_path = '',
		xml_path = root_path + '/gallery_index.xml';

	//Get the xml file with kitchen meta information
	$.ajax({
		method: 'get',
		url: xml_path,
		dataType: 'xml',
		success: function(xml) {

			//root_path = $(xml).find('path').attr('src'),
			var album_list = $('#km-album-list ul'),
				album_num = 0;
			
			//Build list of albums
			$(xml).find('album').each(function(){
				album_num++;

				var album = $(this),
					album_id = album.attr('id'),
					album_title = album.attr('title'),
					album_description = $(this).find('description').text(),
					thumbnail = '';
					
				$(this).find('image').each(function(index, element){
					var filename = root_path + img_path + '/' + album_id + '/' + $(this).attr('filename');

					if(index==0){
						thumbnail = filename;
					}
					if($(this).attr('featured')){
						thumbnail = filename;
					}
				});

				$('<li />').append(
					$('<a />',{
						href : '#',
						id : album_id,
						click : function(){

							var album_id = $(this).attr('id');

							if($('#km-album-slider').hasClass('slick-slider')){										
								$("#km-album-slider").slick('unslick');
								$("#km-album-filmstrip").slick('unslick');
								console.log('unslicked');
							}

							$("#km-album-popup #km-album-slider").empty();
							$("#km-album-popup #km-album-filmstrip").empty();
							$('#km-album-popup .km-album-description').empty();
							$('#km-album-popup .km-album-title').empty();



							$(xml).find('album[id="' + album_id + '"]').find('image').each(function(index, element){
								var filename = root_path + img_path + '/' + album_id + '/' + $(this).attr('filename');
								$("#km-album-slider").append("<div class='image'><img src='" + filename + "' width=''></div>");
								$("#km-album-filmstrip").append("<div><div class='image'><img src='" + filename + "'></div></div>");
							});


							$('#km-album-slider').slick({
								slidesToShow: 1,
								slidesToScroll: 1,
								arrows: false,
								fade: true,
								asNavFor: '#km-album-filmstrip',
								arrows: true,
								variableWidth: false,
								adaptiveHeight: false,
								lazyLoad: 'progressive',
								slide: '.image',
								initialSlide:1
							});

							$('#km-album-filmstrip').slick({
								slidesToShow: 7,
								slidesToScroll: 1,
								asNavFor: '#km-album-slider',
								dots: true,
								focusOnSelect: true,
								variableWidth: true,
								arrows:true
							});

							$('#km-album-slider').slick('slickPrev');

							$('.km-album-description').append(album_description);
							$('#km-album-popup .km-album-title').append($('<h2>' + album_title + '</h2>'));
						}

					}).append(
						$('<div />', {
							'style': 'background-image: url(' + thumbnail + ')',
							'data-reveal-id' : 'km-album-popup',
							'class' : 'km-show km-album-list-thumb'
						}),
						$('<h5 class="km-album-title">' + album_title + '</h5>')
					)
				).appendTo(album_list);


			});
		}
	});

})();

$(document).ready(function(){

	$(document).foundation();    
	$('.km-show').click(function(){
		$('#km-album-popup').foundation('reveal', 'open');
	});

	$('.hs-dateinput .hs-input').click(function(event){
		event.preventDefault();
	});
});


