$("#productosBlock").hide();
$("#tarjetaUno").hide();
$("#tarjetaDos").hide();
$("#tarjetaTres").hide();


setTimeout(
    function(){
    $("#presentacion").hide("slow")
    }
,2000)

setTimeout(
    function(){
        $("#productosBlock").show("slow")
    }
,2000)

$("#productoUno").click(function (e) { 
    e.preventDefault();
    $("#productosBlock").hide("slow");
    $("#tarjetaUno").show("slow");
});

$("#productoDos").click(function (e) { 
    e.preventDefault();
    $("#productosBlock").hide("slow");
    $("#tarjetaDos").show("slow");
});

$("#productoTres").click(function (e) { 
    e.preventDefault();
    $("#productosBlock").hide("slow");
    $("#tarjetaTres").show("slow");
});