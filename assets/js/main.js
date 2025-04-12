$('.navbar').on('click', 'a[href^="#"]', function (event) {
     event.preventDefault();
 /*===== MENU SHOW =====*/ 
 const showMenu = (toggleId, navId) =>{
     const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId)
 
     $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
 });
