$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);
         var position = $target.offset().top - 60

         $('html, body').stop().animate({
             scrollTop: position // 60 c'est la height de ma navbar en pixels
         }, 600, 'swing' );
     });
 });