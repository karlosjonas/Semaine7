$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             scrollTop: $target.offset().top - 60 // 60 c'est la height de ma navbar en pixels
         }, 600, 'swing', function () {
             window.location.hash = scrollTop;
         });
     });
 });