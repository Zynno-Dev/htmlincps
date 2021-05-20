$("#productosBlock").hide();
$("#tarjetaUno").hide();
$("#tarjetaDos").hide();
$("#tarjetaTres").hide();

let TarjetaUno = false;
let TarjetaDos = false;
let TarjetaTres = false;

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
    TarjetaUno = true;
});

$("#productoDos").click(function (e) { 
    e.preventDefault();
    $("#productosBlock").hide("slow");
    $("#tarjetaDos").show("slow");
    TarjetaDos = true;
});

$("#productoTres").click(function (e) { 
    e.preventDefault();
    $("#productosBlock").hide("slow");
    $("#tarjetaTres").show("slow");
    TarjetaTres = true;
});

$(".buttonBack").click(function (e) { 
    e.preventDefault();
    if (TarjetaUno){
        $("#tarjetaUno").hide("slow");
        $("#productosBlock").show("slow");
        TarjetaUno = false
    }
    else if (TarjetaDos){
        $("#tarjetaDos").hide("slow");
        $("#productosBlock").show("slow");
        TarjetaDos = false
    }
    else if (TarjetaTres){
        $("#tarjetaTres").hide("slow");
        $("#productosBlock").show("slow");
        TarjetaTres = false
    }
    
});