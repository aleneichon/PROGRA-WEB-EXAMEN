



$("#btn-click").click(function(){
    $(".tercero").after("<p>nuevo parrafo</p>")
});

$("#btn-ocultar").click(function(){
    $("fieldset").hide();
});

$("#btn-mostrar").click(function(){
    $("fieldset").show();
});