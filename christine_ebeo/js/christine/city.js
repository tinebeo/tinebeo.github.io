/* init the continent buttons */
function init_continent_list(){

    var nav_items = [
        ["africa", "af.png", "Africa", "af"],
        ["asia", "as.png", "Asia", "as"],
        ["europe", "eu.png", "Europe", "eu"],
        ["north-america", "na.png", "North America", "na"],
        ["south-america", "sa.png", "South America", "sa"]
    ]

    /* continent lists */
    let result = "";
    for(let i = 0; i < nav_items.length; i++){
        result += "<div class=\"feature_nav\">"
            + "<a href=\"#"+ nav_items[i][0] +"\" class=\"magnify\">"
            + "<img src=\"images/christine/" + nav_items[i][1] +"\" class=\"magnify\" alt=\""+nav_items[i][2]+" continent\" onclick=\"show_"+ nav_items[i][3] +"()\"></a>"
            + "<p>" + nav_items[i][2] + "</p>"
            + "</div>";
    }


    document.getElementsByClassName('feature_container_nav')[0].innerHTML += result;    

}

/* shows content for each continent, load from sub html */
function show_af(){
    $(".city_content").load("city/christine/africa.html");
}

function show_as(){
    $(".city_content").load("city/christine/asia.html");
}

function show_eu(){
    $(".city_content").load("city/christine/europe.html");
}

function show_na(){
    $(".city_content").load("city/christine/north_america.html");
}

function show_sa(){
    $(".city_content").load("city/christine/south_america.html");
}

init_continent_list();





