$(document).ready(function(){

    /* Animação no menu Cadastro / Login */
$(".menulogin").css("color","#C4C4C4") 


$("#menucad").click(function(){
    $(this).css("color","#333333") 
    $(".menulogin").css("color","#C4C4C4") 
})

$("#menulogin").click(function(){
    $(this).css("color","#333333");
    $(".menucad").css("color","#C4C4C4") 
})
/* Fim animação Menu cadastro / Login */




/* Animação ao clicar nos inputs */
$(".inputcad").focusin(function(){
    $(this).css('outline', 'none');
    $(this).css('border', '1px solid #333333');
}).focusout(function(){
    $(this).css('border', '');
})
/* Fim da animação ao clicar nos input */




});