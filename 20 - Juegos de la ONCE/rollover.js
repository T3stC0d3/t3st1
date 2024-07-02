$(document).ready(function() {
    "use strict";
    console.log("Document ready function is running."); // Agregado para verificar si la función se está ejecutando correctamente
    $("figure").mouseenter(function() {
        $("figcaption", this).stop().animate({"top": "0%"}, 200, 'swing');
    });

    $("figure").mouseleave(function() {
        $("figcaption", this).stop().animate({"top": "100%"}, 400, 'swing');
    });
});