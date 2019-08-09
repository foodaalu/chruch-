
    $('#logo').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 3000,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});

$('#customers').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

