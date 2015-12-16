//ROI TRACKER
;if(typeof ROIStorage === 'undefined') {
(function(d,b,c,f){d[b]={};d[b].windowName=d.name;d[b].GoogleAnalyticsObject=c;d[b].q=[];d[c]=function(){d[b].q.push(arguments)};d[c].q=d[c].q||[];d[b].roiq=[];d[b].analyticsJsNotLoaded=true;d[c].q.push([function(){d[b].realGa=d[c];d[b].analyticsJsNotLoaded=false;d[c]=function(){if(typeof arguments[0]==="function"){d[b].realGa(arguments)}else{d[b].q.push(arguments)}};d[b].roiq.push=function(){d[b].realGa.apply(d,arguments)};for(f=0;f<d[b].roiq.length;f+=1){d[b].realGa.call(d,d[b].roiq[f])}}])})(window,"ROIStorage","ga");ROIStorage.gaq=ROIStorage.gaq||[];window._gaq={push:function(){var a;for(a=0;a<arguments.length;a++){ROIStorage.gaq.push(arguments[a])}}};var _gaq=window._gaq;ROIStorage.gaq=ROIStorage.gaq||[];window._gat={trackingObjects:{},_createTracker:function(a,b){return new _gat.Tracker(a,b)},_getTracker:function(a){return _gat._createTracker(a)},_getTrackerByName:function(a){var a=a||"";if(_gat.trackingObjects.hasOwnProperty(a)){return _gat.trackingObjects[a]}return _gat._createTracker("UA-XXXXX-X",a)},_anonymizeIp:function(){ROIStorage.gaq.push("_gat._anonymizeIp")},_forceSSL:function(){ROIStorage.gaq.push("_gat._forceSSL")},_getPlugin:function(){ROIStorage.gaq.push("_gat._getPlugin")},Tracker:function(a,g){var c,h,e=["_addDevId","_addEventListener","_addIgnoredOrganic","_addIgnoredRef","_addItem","_addOrganic","_addTrans","_clearIgnoredOrganic","_clearIgnoredRef","_clearOrganic","_clearTrans","_clearXKey","_clearXValue","_cookiePathCopy","_createEventTracker","_createXObj","_deleteCustomVar","_get","_getAccount","_getClientInfo","_getDetectFlash","_getDetectTitle","_getLocalGifPath","_getName","_getPlugin","_getServiceMode","_getVersion","_getVisitorCustomVar","_getXKey","_getXValue","_initData","_linkByPost","_removeEventListener","_sendXEvent","_set","_setAccount","_setAllowAnchor","_setAllowHash","_setAllowLinker","_setAutoTrackOutbound","_setCampCIdKey","_setCampContentKey","_setCampIdKey","_setCampMediumKey","_setCampNOKey","_setCampNameKey","_setCampSourceKey","_setCampTermKey","_setCampaignCookieTimeout","_setCampaignTrack","_setClientInfo","_setCookiePath","_setCookiePersistence","_setCookieTimeout","_setCustomVar","_setDetectFlash","_setDetectTitle","_setDomainName","_setHrefExamineLimit","_setLocalGifPath","_setLocalRemoteServerMode","_setLocalServerMode","_setMaxCustomVariables","_setNamespace","_setPageGroup","_setReferrerOverride","_setRemoteServerMode","_setSampleRate","_setSessionCookieTimeout","_setSessionTimeout","_setSiteSpeedSampleRate","_setTrackOutboundSubdomains","_setTrans","_setTransactionDelim","_setVar","_setVisitorCookieTimeout","_setXKey","_setXValue","_trackEvent","_trackPageLoadTime","_trackPageview","_trackSocial","_trackTiming","_trackTrans","_visitCode"];var b=g||"";var f=a||"UA-XXXXX-X";function d(i){return function(){if(b){i=b+"."+i}var j=Array.prototype.slice.call(arguments,0);j.unshift(i);ROIStorage.gaq.push(j)}}for(c=0;c<e.length;c++){h=e[c];this[h]=d(h)}this["_getLinkerUrl"]=function(i){return i};this["_link"]=function(i){ROIStorage.gaq.push(function(){location.href=i})};_gat.trackingObjects[b]=this}};var _gat=window._gat;
(function () {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://7d18f6aced033519f357-7f3b7ae29e3a92e004eb833ba38b7450.ssl.cf2.rackcdn.com/gate.js' : 'http://9e7781e5889f8b943f6e-7f3b7ae29e3a92e004eb833ba38b7450.r72.cf2.rackcdn.com/gate.js');
   var s = document.getElementsByTagName('script')[0];
   s.parentNode.insertBefore(ga, s);
})();
}

//ROI GOOGLE ANALYTICS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-560864-1', 'auto');
ga('send', 'pageview');


//GOOGLE CSE
(function() {
    var cx = '013038454547745104567:uveovvfcb2o';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();


























var disableddates = ["12-3-2014", "12-11-2014", "12-25-2014", "12-20-2014"];



function DisableSpecificDates(date) {

	console.log('Date: ' + date );

	var m = date.getMonth();
	var d = date.getDate();
	var y = date.getFullYear();

	// First convert the date in to the mm-dd-yyyy format 
	// Take note that we will increment the month count by 1 
	var currentdate = (m + 1) + '-' + d + '-' + y ;

	console.log(currentdate);

	// We will now check if the date belongs to disableddates array 
	for (var i = 0; i < disableddates.length; i++) {

		// Now check if the current date is in disabled dates array. 
		if ($.inArray(currentdate, disableddates) != -1 ) {
		return [false];
		
		}

	}

}


$(function() {

	//$( "appointment_date_forms_only-bcceafcc-10d9-42e0-9798-22b28dc72a0e_2973" ).datepicker({
	//	beforeShowDay: DisableSpecificDates
	//});
});

$(function(){
	console.log($("input[id*='appointment_date_']").length);
})