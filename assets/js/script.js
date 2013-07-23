
$(document).ready(function() {

	var left = $('#new-list').width();
	var right = $('#detail-list-panel').width();


	/* Scroll Down Button */
	$('#create-list').click(function(){
		$('#new-list').slideDown().css({left:-left}).animate({"left":"0px"}, 200);
	});

	$('#create-assignment').click(function(){
		closePanel();
	});


	/* Hammer */
	$('#new-list').hammer().on("swipeleft", function(ev) {
		closePanel();
  		ev.stopPropagation();
	});


	$('#detail-list-panel').hammer().on("swiperight", function(ev) {
		$('#detail-list-panel').animate({"right":-right +2}, 200, function(){
			$('#detail-list-panel').slideUp();
		});

		$('html, body').removeAttr('style');
  		ev.stopPropagation();
	});

	$('#postReview').click(function(){

	});



	function closePanel(){
		$('#new-list').animate({"left":-left}, 200, function(){});
	}




	$('.item-complete').click(function(event){
		var myClick = this;
		event.preventDefault();

		var listItem= $(this).parent().parent().parent();
		listItem.slideUp(500, function(){
			listItem.appendTo('#bibliography-list').slideDown();
			$(myClick).removeClass('item-complete').addClass('item-uncomplete');
		});
	});

	$('.item-uncomplete').click(function(event){
		var myClick = this;

		event.preventDefault();

		var listItem= $(this).parent().parent().parent();
		listItem.slideUp(500, function(){
			listItem.appendTo('#detail-list-items').slideDown();
			$(myClick).removeClass('item-uncomplete').addClass('item-complete');
		});
	});



	$('.sub-header-small').click(function(){

		var header = this;

		$(this).next('ul').slideToggle(200, function() {

			if ($(this).is(":hidden")) {
				$(header).removeClass('icon-arrow-down').addClass('icon-arrow-up');
			  } else {
				$(header).removeClass('icon-arrow-up').addClass('icon-arrow-down');
			}
  		});
	});


	$('#detail-list-items h3, #detail-list-items h5, #detail-list-items .cover, #bibliography-list h3, #bibliography-list h5, #bibliography-list .cover').click(function(){
		$('#detail-list-panel').slideDown().css({right:-right}).animate({"right":"0"}, 200);
		$('html, body').css({
			height: "100%",
			overflow: "hidden"
		});

	});

	$('.book-list ul li').hammer().on("swipeleft, swiperight" ,function(ev){
		$(this).slideUp();
	});

	$('#show-review').click(function(){
		$(this).slideUp();
		$('#review-form').slideDown();
	});


	if($('.tagbox').length > 0){
		// Topic tagging (create new list)
		$('.tagbox').tagit({

		    // Options
		    autocomplete: {delay: 0, minLength: 2},
		    removeConfirmation: false,
		    caseSensitive: true,
		    allowDuplicates: false,
		    allowSpaces: false,
		    readOnly: false,
		    tagLimit: null,
		    singleField: false,
		    singleFieldDelimiter: ',',
		    singleFieldNode: null,
		    tabIndex: null,
		    placeholderText: null
	    });
	}

	

	// Star rating (reviews section)
	$('#star').raty({
		path: 'assets/img/',
		width: 120
	});

	$('.book-list').sortable({
		handle: '.icon-move-list',
		axis: 'y'
	});

	$('#overviewPage .item-add').click(function(){
		var myClick = this;

		event.preventDefault();

		var listItem= $(this).parent().parent().parent();
		listItem.slideUp(500, function(){
			listItem.appendTo('#detail-list-items').slideDown();
			$(myClick).removeClass('item-add').addClass('item-complete');
		});
	});


});

