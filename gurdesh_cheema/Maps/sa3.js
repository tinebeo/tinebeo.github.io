$(document).ready(function(){
    buildMap();
  });
  
  var sw = document.body.clientWidth,
      bp = 550,
      $map = $('.map');
  var static = "https://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
  var embed = '<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rio%20De%20Janerio+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>';
  
  function buildMap() {
    if(sw>bp) { 
        if($('.map-container').length < 1) { 
          buildEmbed();
        }
    } else {
        if($('.static-img').length < 1) { 
          buildStatic();
        }
    }
  };
  
  function buildEmbed() { 
      $('<div class="map-container"/>').html(embed).prependTo($map);
  };
    
  function buildStatic() { 
     var mapLink = $('.map-link').attr('href'),
         $img = $('<img class="static-img" />').attr('src',static);
     $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
  }
  
  $(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
  });