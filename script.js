	$( document ).ready(function() {
    console.log( "ready!" );

  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
  $('.login-register-popup').hide();
$('.login-icon').click(function(){
  $('.login-register-popup').show();
})
$('.close-login-register-popup').click(function(){
  $('.login-register-popup').hide();
});



      let searchBtn = document.querySelector('.search-icon');
      let closeBtn = document.querySelector('.close-btn');
      let searchBox = document.querySelector('.search-box');

      searchBtn.onclick = function(){
        searchBox.classList.add('active');
        closeBtn.classList.add('active');
        searchBtn.classList.add('active');
      }
      closeBtn.onclick = function(){
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        $('.search-box input').val('');
      }
});
