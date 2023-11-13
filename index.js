$("li").on( "click", function(event) {

    let target = $(event.target);
    if (!target.is("a")) {
        $(this).children("p").slideToggle();
    }

    if ($(this).children("i").hasClass("fa-caret-down")) {
        $(this).children("i").removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
        $(this).children("i").removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    
});