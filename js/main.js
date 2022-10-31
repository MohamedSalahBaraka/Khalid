$(window).on('scroll', () => {
    if ($(window).scrollTop() > $(window).height()){
        $("#navbar-b").removeClass("d-none");
    }else{
         $("#navbar-b").addClass("d-none");
    }
});
$("#navbar-top").hover(() => {
     $("#navbar-top").addClass('fixed-top').removeClass("position-absolute").css("background-color", "white");
    $("#logo").attr("src", "images/logo_1_500x_b28a2fb2-3970-4edd-9e63-90ed04f7b0a0_200x.png");
    $(".nav-link-top").removeClass("text-white").css("color","#471c0c")
}, () => {
     $("#navbar-top").removeClass('fixed-top').addClass("position-absolute").css("background-color", "transparent");
    $("#logo").attr("src", "images/logo_1_500x-white_200x.webp");
    $(".nav-link-top").addClass("text-white").css("color","#471c0c")
});
$("#categories").hover(() => {
    $($("#categories").data("target")).toggleClass("d-none")

});
$("#tags").hover(() => {
   $($("#tags").data("target")).toggleClass("d-none")

})