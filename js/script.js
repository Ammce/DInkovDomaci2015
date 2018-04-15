// To whomever is reading this, this is just a script for scrolling. This is a prove that Dinko made this website entirely by himself
// I just helped him with this little script
// Created by Amel Amce Muminovic



$( document ).ready(function() {

    
    $('.about').click(function(){
      
         $('html,body').animate({
        scrollTop: $(".container2").offset().top},
        'slow');
      
    });
    
    
       $('.port').click(function(){
      
         $('html,body').animate({
        scrollTop: $(".container3").offset().top},
        'slow');
      
    });
    
       $('.cont').click(function(){
      
         $('html,body').animate({
        scrollTop: $(".container4").offset().top},
        'slow');
      
    });
    
});