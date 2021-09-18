jQuery(document).ready(function($) {
    $('.fadeOut').owlCarousel({
      items: 1,
      autoplay: true,
      animateOut: 'fadeOut',
      loop: true,
      margin: 10,
    });
    $('.custom1').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items: 1,
      margin: 30,
      stagePadding: 30,
      smartSpeed: 450
    });
  });

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  

  var owl = $('#logo-slider');
  owl.owlCarousel({
      items:6,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      animateOut:'slideOutDown'
  });