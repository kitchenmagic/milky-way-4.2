jQuery(document).ready(function($) {

    //Get Main XML File
    $.ajax({
        method: 'get',
        url: 'galleryV1.xml',
        dataType: 'xml',
        success: function(xml) {

            var gallery_nav = $('#gallery-nav');
            var album = 0;

            $(xml).find('category').each(function() {
                album++;

                var category = $(this);
                var title = category.attr('title');
                var xml_path = category.find('xmlPath').attr('src');
                var thumbnail = category.find('thumbnail').attr('src');

                //This doesnt find anything
                var image = category.find('image').attr('src');

                console.log(thumbnail);

                var link = $('<a />', {
                    href: 'javascript:void(0);',
                    click: function() {
                        if ($('#gallery-nav').hasClass('first-click')) {
                            $('#gallery-nav').slideToggle('slow');
                        }
                        $('#gallery-nav').addClass('first-click');
                        $.ajax({
                            method: 'get',
                            url: xml_path,
                            dataType: 'xml',
                            success: function(gallery_xml) {

                                $('#gallery #carousel').empty().append($('<ul />'));
                                var items = 0;
                                $(gallery_xml).find('item').each(function() {
                                    items++;
                                    var description_node = $(this).find('description').text();
                                    var description = $(description_node);
                                    var thumbnail = $(this).find('thumbnail').attr('src');
                                    var image = $(this).find('image').attr('src');
                                    var title = $(description[0]).text();

                                    var active_class = (items == 1 ? 'active' : '');
                                    $('<img />').attr('src', image); // Preload images
                                    var gallery_link = $('<a />', {
                                        'class': 'carousel-link',
                                        href: image,
                                        'data-title': title,
                                        'data-description': description_node
                                    }).append(
                                        $('<img />', {
                                            src: thumbnail,
                                            title: title
                                        })
                                    );

                                    $('#gallery #carousel ul').append(
                                        $('<li />', {
                                            'class': active_class
                                        }).append(
                                            gallery_link
                                        )
                                    );
                                    if (items == 1) {
                                        console.log(gallery_link);
                                        gallery_link.trigger('click');
                                    }

                                });
                                $('#gallery #carousel').jCarouselLite({
                                    btnNext: '#next',
                                    btnPrev: '#prev',
                                    visible: 6
                                }).show();
                            }
                        })
                    }
                });
                
                console.log(link.href);

                if (album == 1) {
                    $('<img />').attr('src', image);
                    //Equivelent of clicking the first item to trigger its click event handler
                    link.click();
                }


                gallery_nav.append(
                    $('<div />', {
                        'class': 'gallery'
                    }).append(
                        link.append(
                            $('<div class="gallery-item" />').append(
                                $('<div />', {
                                    'class': 'header',
                                    html: title
                                })
                            ).append(
                                $('<img />', {
                                    src: thumbnail,
                                    alt: title
                                })
                            )
                        )
                    )
                );

            });

            gallery_nav.append('<div style="clear: both;"></div>');

        }
    });
    $('#caption').live('mouseenter', function() {
        $(this).parent().find('img').trigger('mouseenter');
    });
    $('#caption').live('mouseleave', function() {
        $(this).parent().find('img').trigger('mouseleave');
    });


    // Slide Gallery Nav open 1 sec after pageload
    $('#gallery-nav').delay(1000).slideToggle('slow');

    // Toggle Gallery Nav open & close
    $('#gallery-show').click(function() {
        $('#gallery-nav').slideToggle('slow');
    });
    $('#carousel a.carousel-link').live('click', function(e) {
        e.preventDefault();
        var image = $(this).attr('href');
        var title = $(this).attr('data-title');
        var description = $(this).attr('data-description').replace(/<title>(.*)<\/title>/g, '');
        console.log(description);
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('#gallery #image img').replaceWith(
            $('<img />', {
                src: image
            }).hover(
                function() {
                    $('#caption').empty().show().append(
                        $('<h2 />', {
                            html: title
                        }).after(
                            description
                        )
                    ).width($('#gallery #image img').width() - 20)
                },
                function() {
                    $('#caption').empty().hide();
                }
            )
        );
    });
    $('#gallery-nav .gallery:first').trigger('click');

});