'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	projectClick();
})

function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Hello! This button works!");
		$("#testjs").text("Please wait...");
		$(this).prev().addClass("active");
	});

	$("a.thumbnail").click(projectClick);

	console.log("Page successfully initialized")

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

/*
 * Function that is called when the document is ready.
 */

function projectClick(e) {
	console.log("Project clicked")
	// prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#f9ee72");

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>This is a project description. Thanks for interacting with me!</p></div>");
    } else {
       description.fadeOut();
    }
}
