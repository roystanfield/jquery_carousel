
var current_image = 0;
var number_of_images = 0;
var temp_escape_container = 0;


// Name each image with a unique class name
function name_images() {
  $("#carousel_list li").each(function(i) {
    $(this).addClass("image"+i);
    i++;
    //console.log($(this).attr("class"));
  });
}


// Hide all carousel images except for the first
function hide_carousel_images() {
  $("#carousel_list li").hide();
  $("#carousel_list li:first").show();
}



// After click on next change image forward
function next_image(current_image, number_of_images) {

  if (current_image + 1 === number_of_images && current_image === 0) {
    return -1;
  } 
  else if (current_image + 1 === number_of_images && current_image != 0) {
  	var image_number = 0;
  	return fade(current_image, image_number);
  }
  else {
    var image_number = current_image + 1;
    //console.log(current_image, image_number);
		return fade(current_image, image_number); 
  }
}



// After click on prev change image back
function prev_image(current_image, number_of_images) {

  if (current_image + 1 === number_of_images && current_image === 0) {
    return -1;
  } 
  else if (current_image + 1 === 1 && number_of_images != 1) {
  	var image_number = number_of_images - 1;
  	return fade(current_image, image_number);
  }
  else {
    var image_number = current_image - 1;
		return fade(current_image, image_number); 
  }
}



// Fade in and Fade out images
function fade(current_image, image_number) {
	$(".image"+current_image).fadeOut(300);
	$(".image"+image_number).fadeIn(300);
  console.log(current_image, image_number);
  current_image = image_number;
  temp_escape_container = current_image; // why do I need this?
	return temp_escape_container;
}
 



$(document).ready(function() {

  
  // Get the number of images
  number_of_images = $("#carousel_list li").size();
  
  // Show next and prev links only if there is more than one images.
  // This uses a self executing function.
  
  (function() {
  	if (number_of_images <= 1) {
  		$("#carousel_nav").hide();
    }
  })()

	// Listen for next and prev click events
  $(".next").click(function() {
    current_image = temp_escape_container;  // why do I need this?
    next_image(current_image, number_of_images);
    return false;
  });
  
  $(".prev").click(function() {
    current_image = temp_escape_container;  // why do I need this?
    prev_image(current_image, number_of_images);
    return false;
  });

  
  // Call functions that should occur on document.ready
  name_images();
  hide_carousel_images();
  
  
});
  


