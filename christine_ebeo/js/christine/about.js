var file_counter = 0;

/* gallery */
function init_gallery(){
    // video code
    var img_code = ["GAd9FH8DPTs", "VIT-zhyiAoo", "-mKF83BndXY"];
    // image source
    var img_src = ["images/christine/banner_tokyo.jpg", "images/christine/banner_paris.jpg", "images/christine/banner_la.jpg"];
    var img_pos = 0;

    // assign first image to show on gallery
    document.getElementById("gallery").innerHTML += "<a href=\"https://www.youtube.com/embed/"+img_code[img_pos]+"\" target=\"blank\" id=\"gallery_src\"><img src=\"images/christine/watch-now.gif\" id=\"gallery_overlay\" class=\"magnify\"><img src=\""+img_src[img_pos]+"\" id=\"gallery_img\"></a>";

    // every 5 seconds, change the url
    setInterval( function(){
        img_pos += 1;

        if (img_pos == img_code.length) {
            img_pos = 0;
        }

        get_next_image(img_code[img_pos], img_src[img_pos]);
        
    }, 5000);

}

/* change the anchor and img src codes */
function get_next_image(video_code, img_source) {

    document.getElementById("gallery_src").setAttribute('href', "https://www.youtube.com/embed/"+video_code);

    document.getElementById("gallery_img").setAttribute("src", img_source);

}

/* suggestion box, push to file */
function suggest() {
    // ideally this should be pushed to the server, but logging it for now
    console.log(document.getElementById("suggestion_form").value);
    
    var ty = "<p>Thank you! We look forward to hearing from you again.</p>";

    document.getElementById("thank_you_notif").innerHTML = ty;

    // remove the form content
    document.getElementById("suggestion_form").remove();
    document.getElementById("submit").remove()

    return false;
    
}

// initialize the rotating gallery
init_gallery();