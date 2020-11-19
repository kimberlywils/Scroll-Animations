$(window).on("load", function () {

	var $window = $(window);
	var $document = $(document);

	// SLIDE IN ANIMATIONS
	
	$(".slide-element-onload").addClass("slide-element-onload-loaded");

	function offsetSldInElems() {

		var $sldInL = $(".slide-in-left");
		var $sldInR = $(".slide-in-right");
		var $sldInT = $(".slide-in-top");
		var $sldInB = $(".slide-in-bottom");

		$sldInL.css({
			"transform": "translate(" + -(($sldInL.width()) + ($sldInL.offset().left)) + "px,0)"
		});
		$sldInR.css({
			"transform": "translate(" + (($window.width()) - ($sldInR.offset().left)) + "px,0)"
		});
		$sldInT.css({
			"transform": "translate(0," + -($sldInT.height()) + "px)"
		});
		$sldInB.css({
			"transform": "translate(0," + ($sldInB.height()) + "px)"
		});

	}
	offsetSldInElems();


	// PARALLAX SCROLL ANIMATIONS

	function offsetPlxElems() {
		var $plxSD = $(".parallax-slow-down");
		var $plxMD = $(".parallax-medium-down");
		var $plxFD = $(".parallax-fast-down");
		var $plxSU = $(".parallax-slow-up");
		var $plxMU = $(".parallax-medium-up");
		var $plxFU = $(".parallax-fast-up");

		var $plxSTopD = ((($window.scrollTop()) - ($window.height())) * .4);
		var $plxMTopD = ((($window.scrollTop()) - ($window.height())) * .5);
		var $plxFTopD = ((($window.scrollTop()) - ($window.height())) * .6);
		var $plxSTopU = ((($window.scrollTop()) - ($window.height())) * -.4);
		var $plxMTopU = ((($window.scrollTop()) - ($window.height())) * -.5);
		var $plxFTopU = ((($window.scrollTop()) - ($window.height())) * -.6);

		$plxSD.css({
			"transform": "translate(0," + $plxSTopD + "px)"
		});
		$plxMD.css({
			"transform": "translate(0," + $plxMTopD + "px)"
		});
		$plxFD.css({
			"transform": "translate(0," + $plxFTopD + "px)"
		});
		$plxSU.css({
			"transform": "translate(0," + $plxSTopU + "px)"
		});
		$plxMU.css({
			"transform": "translate(0," + $plxMTopU + "px)"
		});
		$plxFU.css({
			"transform": "translate(0," + $plxFTopU + "px)"
		});

	}
	offsetPlxElems();


	// CHECK IF ELEMENT IS IN VIEW
	
	function checkInView() {
		var $windowTop = ($window.scrollTop());
		var $windowBottom = ($windowTop) + ($window.height());

		$.each($(".animate-element"), function () {
			var $element = $(this);
			var $elementTop = ($element.offset().top)
			var $elementBottom = ($elementTop) + ($element.outerHeight())

			if (($elementBottom >= $windowTop) && ($elementTop <= $windowBottom)) {
				if ($element.hasClass("slide-element")) {
					$element.addClass("slide-element-in-view");
				} else if ($element.hasClass("parallax-element")) {
					$element.addClass("parallax-element-in-view");
				}
			} else {
				if ($element.hasClass("slide-element")) {
					$element.removeClass("slide-element-in-view");
				} else if ($element.hasClass("parallax-element")) {
					$element.removeClass("parallax-element-in-view");
				}
			}
		});

	}
	checkInView();

	$window.trigger("scroll");
	$window.on("scroll", checkInView);
	$window.on("scroll", offsetPlxElems);
	$window.on("resize", checkInView);

});
