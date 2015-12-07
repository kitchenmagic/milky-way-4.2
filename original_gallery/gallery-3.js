(function(){
	var srcRoot = 'http://www.kitchenmagic.com/files/gallery/asset/';

	$.ajax({
        method: 'get',
        url: 'index.xml',
        dataType: 'xml',
        success: function(xml) {
        	console.log(xml);
        }
    });
})()