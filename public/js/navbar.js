//A function that inverts the styling of the navbar
function invertNavbar() {
  //Shortcuts definitions
  let $navbar = $('.navbar');
  let $logoimg = $('#logo-img');
  //Inverts background
  $navbar.toggleClass('invert-bg');
  //Inverts text on the li elements
  $navbar.children().children().toggleClass('text-black');
  //Inverts the outline of the logo
  $('#logo').children().toggleClass('outline-black').toggleClass('outline-white');
  //Switches between the show more and show less icon
  $('.icon').toggleClass('more').toggleClass('less');
  if ($('#more').text() == 'MORE') {
    //Change it to close
    $('#more').html('CLOSE');
    //Else viceversa
  } else {
    $('#more').html('MORE');
  };
  $logoimg.toggleClass('inverted');
};

//A function that shows or hides the sidebar on the right-side
function toggleSidebar() {
  $('.sidebar').toggleClass('hidden');
}

//When the DOM is loaded and ready
$(document).ready(() => { // BEGIN OF CLICK HANDLER
  let counter = 0;
  let lastClick = Date.now();
  //Upon user click on the MORE anchor
  $('#more').click((event) => {
    //Don't bring the user anywhere
    event.preventDefault();
    let isMenuOpen = $('#more').text() == "CLOSE";
    //If the menu is already open
    if (isMenuOpen && (((Date.now() - lastClick) > 1000) || (counter == 0))) {
      //Hide the side bar first
      toggleSidebar();
      //After 0.5s, when sidebar is hidden, invert the navbar
      setTimeout(invertNavbar, 500);
      lastClick = Date.now();
      //Else viceversa
    } else if (((Date.now() - lastClick) > 1000) || (counter == 0)) {
      invertNavbar();
      setTimeout(toggleSidebar, 500);
      lastClick = Date.now();
    };
    counter ++;
  }); // END OF CLICK HANDLER
});
