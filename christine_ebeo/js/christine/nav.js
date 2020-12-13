// cretes the navigation on all three features
function init_nav_list(){
    console.log("init");

    var nav_items = [
        ["index.html", "Home"],
        ["about.html", "About"],
        ["city.html", "City"],
        ["../priyadarshana_sarma/hotspots.html", "Hotspots"],
        ["../priyadarshana_sarma/food_and_drinks.html", "Food and Drinks"],
        ["../priyadarshana_sarma/transportation.html", "Transportation"],
        ["../gurdesh_cheema/hotel.html", "Accomodation"],
        ["../gurdesh_cheema/shopping.html", "Shopping"],
        ["../gurdesh_cheema/maps.html", "Map"],
        ["../chisom_anele/contacts page.html", "Gallery"],
        ["../chisom_anele/help services.html", "Services"],
        ["../chisom_anele/gallery page.html", "Contact Us"],
    ]

    /* nav lists */
    let result = "<ul>";
    for(let i = 0; i < nav_items.length; i++){
        result += "<li><a href=\"" + nav_items[i][0] + "\">"
            + nav_items[i][1] + "</a></li>";
    }
    result += "</ul>";
    document.getElementById('nav_menu').innerHTML += result;    
    
}


init_nav_list();