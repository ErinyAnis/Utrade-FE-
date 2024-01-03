

	$(".selected-option").click(function(event) {
		event.stopPropagation(); //stop the click from bubbling to parent elements;
		$(".select-option-card").stop().fadeOut("fast");
		$(this).next(".select-option-card").stop().fadeToggle("fast");
	});

	$(".select-option-card li").click(function(event) {
		var x = $(this).text();
		$(this).parents(".select-option-card").hide();
		$(this).parents(".dropdown-list").find(".selected-option p").text(x);
	});

	//body click to close popup.
	$(document).click(function() {
		$(".select-option-card").hide();
	});

