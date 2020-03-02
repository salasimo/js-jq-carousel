$(document).ready(function(){

    var clock = setInterval(nextImage, 1000);

    setTimeout(function(){
        clearInterval(clock);
    }, 30000);


    $(".slideshow").mouseout(function(){
        clock = setInterval(nextImage, 1000);
    });

    $(".slideshow").mouseover(function(){
        clearInterval(clock);
        
    });


    $(".next").click(function(){
        nextImage();
    });

    $(".prev").click(function(){
        prevImage();

    });


    // Funzioni =========================================

    function nextImage(){
        if ($(".images img.active").hasClass("last")){

            $(".images img.active").removeClass("active");
            $(".images img.first").addClass("active");

            $(".slider-nav i.fas.fa-circle.last").removeClass("active");
            $(".slider-nav i.fas.fa-circle.first").addClass("active");
        } else{
            var imgAttiva = $(".images img.active");
            var prossimaImg = $(".images img.active").next();

            imgAttiva.removeClass("active");
            prossimaImg.addClass("active");

            // Pallini
            var pallinoAttivo = $(".slider-nav i.fas.fa-circle.active");
            var prossimoPallino = $(".slider-nav i.fas.fa-circle.active").next();

            pallinoAttivo.removeClass("active");
            prossimoPallino.addClass("active");
        }
    }

    function prevImage(){
        if ($(".images img.active").hasClass("first")){

            $(".images img.active").removeClass("active");
            $(".images img.last").addClass("active");

            $(".slider-nav i.fas.fa-circle.first").removeClass("active");
            $(".slider-nav i.fas.fa-circle.last").addClass("active");

        } else{
            var imgAttiva = $(".images img.active");
            var precedenteImg = $(".images img.active").prev();

            imgAttiva.removeClass("active");
            precedenteImg.addClass("active");

            // Pallini
            var pallinoAttivo = $(".slider-nav i.fas.fa-circle.active");
            var pallinoPrecedente = $(".slider-nav i.fas.fa-circle.active").prev();

            pallinoAttivo.removeClass("active");
            pallinoPrecedente.addClass("active");
        }
    }



});
