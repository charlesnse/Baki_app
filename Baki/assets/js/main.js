$("#barId").click(function () {

    $("#mobile_sideNav").toggleClass("g-sidenav-show:not(rtl) sidenav")

});

$("#userBar").click(function () {

    $("#trader_mobile").removeClass("right")

});

$("#removeBar").click(function () {

    $("#trader_mobile").addClass("right")

});

$(window).scroll(function () {

    if ($(this).scrollTop() > 10) {

        $('#breadcrumb').addClass('fixed');

    } else {

        $('#breadcrumb').removeClass('fixed');

    }

})

// $('.common_class a').click(function(){
//     $('.common_class a').removeClass('active');
//     $(this).addClass('active');
//  })
