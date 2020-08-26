$(function(){
    'use strict';
    $("#register").on("click",function(){
        $("main").load("../register.html");
    });

    $("#services").on("click",function(){
        $("main").load("../services.html");
    });

    $("#about").on("click",function(){
        $("main").load("../about.html");
    });

    $("#home").on("click",function(){
        $("main").load("../index.html");
    });
});






