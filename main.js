$(document).ready(function(){

    /* Animação no menu Cadastro / Login */

$(".menulogin").css("color","#C4C4C4") 

$(".formcad").show()
$(".formlogin").hide() 

$("#menucad").click(function(){
    $(this).css("color","#333333")
    $(".menulogin").css("color","#C4C4C4") 
    $(".formlogin").hide(500)
    $(".formcad").show(500)
})

$("#menulogin").click(function(){
    $(this).css("color","#333333")
    $(".menucad").css("color","#C4C4C4")
    $(".formcad").hide(500) 
    $(".formlogin").show(500)
})
/* Fim animação Menu cadastro / Login */




/* Animação ao clicar nos inputs */
$(".inputcad").focusin(function(){
    $(this).css('outline', 'none');
    $(this).css('border', '1px solid #1abc9c');
}).focusout(function(){
    $(this).css('border', '');
})
/* Fim da animação ao clicar nos input */

$(".fone").click(function(){
    $(this).css('outline', 'none');
    $(this).css('border', '1px solid #1abc9c');
}).focusout(function(){
    $(this).css('border', '');
})


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
}, 1000);

/* Fim transição automática carrossel */

// $("#nav-next").click(function(){
//     $(this).css('background-color', '#1abc9c');
//     $("#nav-previous").css('background-color', '');
//     $("#car-1").hide(500) 
//     $("#car-2").show(500)
//     $(".nav").show()
// })

// $("#nav-previous").click(function(){
//     $(this).css('background-color', '#1abc9c');
//     $("#nav-next").css('background-color', '');
//     $("#car-2").hide(500) 
//     $("#car-1").show(500)
//     $(".nav").show()
// })


});