$(".block").hover(function () {
        $(this).css("background-color", "#f85a40");
        $(this).children().css("color", "#fff")
    }, function () {
        $(this).css("background-color", "#303030");
        $(this).children().css("color", "#f85a30")
    }
);

$(".contact-us-botton").hover(function () {
        $(this).css("background-color", "#f85a30")
        $(this).css("border", "3px solid #f85a30")
    }, function () {
        $(this).css("background-color", "transparent")
        $(this).css("border", "3px solid #fff")
    }
);

$(".social").hover(function () {
        $(this).css("border", "1px solid #f85a30")
    }, function () {
        $(this).css("border", "1px solid rgb(144, 144, 144)")
    }
);

$(".blog-block-title").hover(function () {
        $(this).css("color", "#f85a30")
    }, function () {
        $(this).css("color", "#000")
    }
);

