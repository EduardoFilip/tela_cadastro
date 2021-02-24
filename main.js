$(document).ready(function(){

    /* Animação no menu Cadastro / Login */

$(".menulogin").css("color","#C4C4C4") 

$(".formcad").show()
$(".formlogin").hide() 

$("#menucad").click(function(){
    $(this).css("color","#333333").css({"text-decoration": "underline 3px #1abc9c","text-underline-offset": "5px"})
    $(".menulogin").css("color","#C4C4C4").css({"text-decoration": "none"}) 
    $(".formlogin").hide(700)
    $(".formcad").show(700)
})

$("#menulogin").click(function(){
    $(this).css("color","#333333").css({"text-decoration": "underline 3px #1abc9c","text-underline-offset": "5px"})
    $(".menucad").css("color","#C4C4C4").css({"text-decoration": "none"})
    $(".formcad").hide(700) 
    $(".formlogin").show(700)
})
/* Fim animação Menu cadastro / Login */




/* Animação ao clicar nos inputs */
$(".inputcad").focusin(function(){
    $(this).css('outline', 'none');
    $(this).css('border', '1px solid #1abc9c');
}).focusout(function(){
    $(this).css('border', '');
})


$(".fone").click(function(){
    $(this).css('outline', 'none');
    $(this).css('border', '1px solid #1abc9c');
}).focusout(function(){
    $(this).css('border', '');
})

/* Fim da animação ao clicar nos input */

/*Carrossel */

window.location = "#car-1";

$("#car-2").css("display","none")


/* Transição automática carrossel */
$("#carrossel > div:gt(0)").hide();

setInterval(function() {
  $('#carrossel > div:first')
    .hide(1000)
    .next()
    .show(1000)
    .end()
    .appendTo('#carrossel');
}, 8000);

/* Fim transição automática carrossel */


});