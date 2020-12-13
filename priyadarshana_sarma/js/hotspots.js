// Creating array of images
$(document).ready(function() {
	var image, imageCounter = 0, imageCache = [];
	$("#myDiv img").each(function() {	
		image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
   	});
	
	//Creating a slideshow with the fading effect
	imageCounter = 0;
	var nextImage;
    setInterval( function () {
        $("#caption").fadeOut(1800); 
       	$("#slide").fadeOut(1800,
			function() {
				imageCounter = (imageCounter + 1) % imageCache.length; //Changing to next image
	        	nextImage = imageCache[imageCounter];
		    	$("#slide").attr("src", nextImage.src).fadeIn(1000);
			    $("#caption").text(nextImage.title).fadeIn(1000);		
			}        	
           );     
    },	
    1000);
}); 

